import { Hono } from "hono";
import { signinInput, signupUser } from "../validate";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL : string,
        JWT_SECRET : string
    }
}>();

userRouter.post('/signup', async (c) =>{
    const body = await c.req.json();

    const {success} = signupUser.safeParse(body);

    if(!success){
        c.status(400);
        return c.json({
            msg: "Invalid Inputs"
        });
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());  

    try{
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email : body.email,
                password : body.password,
                aadharNo: body.aadharNo
            }
        });

        const token = await sign({id : user.userId}, c.env.JWT_SECRET);

		c.status(201);
        return c.text(token);
    }catch(e){
        c.status(403);
        return c.json({
            msg: "Error while signing up"
        });
    }finally {
        await prisma.$disconnect();
    }

});

userRouter.post('/signin', async (c) => {
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
      const user = await prisma.user.findFirst({
        where: {
          email: body.email,
          password: body.password
        }
      });
    
      if(!user){
        c.status(403);
        return c.json({
          error: "User Not Found"
        })
      }
    
      const token = await sign({id: user?.userId}, c.env.JWT_SECRET)
    
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
