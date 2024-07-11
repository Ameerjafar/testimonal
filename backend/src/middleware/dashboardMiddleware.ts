import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";

const dashboardMiddlerware = async (req: Request, res: Response) => {
    const body = req.body;
    const prisma = new PrismaClient();
    try {
        await prisma.dashBoard.create({
            data: {
                spaceName: body.spaceName,
                headerTitle: body.headerTitle,
                customMessage: body.customMessage,
                Question1: body.Question1,
                Question2: body.Question2,
                Question3: body.Question3
            }
        })
        res.json({message: "data added successfully in the database"});
    }catch(error) {
        res.json({message: "data not added successfully"});
    }
}
export default dashboardMiddlerware;