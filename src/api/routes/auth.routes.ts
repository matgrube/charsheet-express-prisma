import { Request, Response, Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const route = Router();
const authController = new AuthController();

export default (app: Router) => {
    app.use('/auth', route);
    route.post('/register', async (req: Request, res: Response) => {
        await authController.register(req, res);
    });

    route.post('/login', async (req: Request, res: Response) => {
        await authController.login(req, res);
    })
}