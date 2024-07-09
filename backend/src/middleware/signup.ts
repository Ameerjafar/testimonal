import zod from 'zod';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
interface reqType {
    firstName: string,
    email: string,
    password: string
}
const signupMiddleware = async (req: Request, res: Response) => { 
    const prisma = new PrismaClient();
    const object = zod.object({
        firstName: zod.string(),
        email: zod.string().email(),
        password: zod.string().min(6)
    })
    const body: reqType = req.body;
    const verify = object.safeParse(body);

    if(verify.success === true) {
        const user: reqType = await prisma.user.create({
            data: {
                firstName: req.body.firstName,
                email: req.body.email,
                password: req.body.password
            }
        })
        res.json({message: "verified and also it is stored in the database."});
    }
    else {
        res.json({message: "not verified"});
    }
}

export default signupMiddleware;
