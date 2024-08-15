import zod from 'zod';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

interface reqType {
    email: string,
    password: string
}
const signinMiddleware = async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const object = zod.object({
        email: zod.string(),
        password: zod.string()
    })
    const body: reqType = req.body;
    const verify = object.safeParse(body);
    const verify1 = await prisma.user.findFirst({
        where: {
            email: body.email,
            password: body.password
        }
    })
    console.log(verify1);
    if(verify.success === true && verify1 !== null) {
        res.json({message: "This is email is verified"});

    }
    else {
        res.json({message: "This email is not verified"});
    }
}
export default signinMiddleware