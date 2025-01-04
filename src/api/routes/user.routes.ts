import { Router, Request, Response } from "express";
import { UserController } from "../controllers/user.controller";

const route = Router();
const userController = new UserController();

export default (app: Router) => {
    app.use('/users', route);

    route.get('/getAll', async (req: Request, res: Response) => {
        await userController.getAll(req, res);
    })
}