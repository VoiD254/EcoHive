import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { signinInput, signupOrg } from "../validate";
import { sign } from "hono/jwt";

export const orgRouter = new Hono<{
    Bindings: {
        DATABASE_URL : string,
        JWT_SECRET : string
    }
}>();

orgRouter.post('/signup', async (c) =>{
    const body = await c.req.json();
    
    const {success} = signupOrg.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            msg: "Invalid Inputs"
        });
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const org = await prisma.org.create({
            data: {
                name: body.name,
                email : body.email,
                password : body.password,
                CIN: body.CIN
            }
        });

        const token = await sign({id: org.orgId}, c.env.JWT_SECRET);

        return c.text(token);
        
    }catch(e){
        c.status(403);
        return c.json({
            msg: "Error while signing up"
        });
    }finally{
        await prisma.$disconnect();
    }

});

orgRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const {success} = signinInput.safeParse(body);
  
    if(!success){
      c.status(411);
      return c.json({
        msg: "Wrong Inputs"
      });
    }
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate());
    
    try{
      const org = await prisma.org.findFirst({
        where: {
          email: body.email,
          password: body.password
        }
      });
    
      if(!org){
        c.status(403);
        return c.json({
          error: "User Not Found"
        })
      }
    
      const token = await sign({id: org?.orgId}, c.env.JWT_SECRET)
    
      return c.text(token);

    } catch(e){
        c.status(411);
        return c.json({
            msg: "Error"
        });

    } finally{
        await prisma.$disconnect();
    }
    
  });
