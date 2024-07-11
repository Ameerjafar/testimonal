
import { Request, Response } from "express"
import  nodemailer  from 'nodemailer';

export const mainHandler = async (req: Request, res: Response) => {
    const {to, message} = req.body;
    const transporter = nodemailer.createTransport({

    })
    try {
        await transporter.sendMail({
            from: "ameerjafar123@gmail.com",
            to, 
            text: message
        })
        res.status(200).send({message: "Email sent successfully"});
    }catch(error) {
        res.status(200).send({message: "Email has not sent"});
    }
}