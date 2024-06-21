import z from "zod";

export const signupUser = z.object({
    name: z.string().max(32),
    email: z.string().email(),
    password: z.string().min(6),
    aadharNo : z.string().regex(/^\d{12}$/)
});

export const signupOrg = z.object({
    name: z.string().max(32),
    email: z.string().email(),
    password: z.string().min(6),
    CIN : z.string().regex(/^[A-Z]{1}[0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/)
});

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});
