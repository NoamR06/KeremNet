import { Request, Response } from 'express';
import path from 'path';


export class ApplicationController {
    public async getLogo(req: Request, res: Response): Promise<void> {
        try{
            const imagePath = path.join(__dirname, '../images/logo.png');
            res.status(201).sendFile(imagePath);
        } catch(error) {
            res.status(500).json({ message: 'Internal server error.', error});
        }
    }
}