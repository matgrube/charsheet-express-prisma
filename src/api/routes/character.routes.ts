import { Request, Response, Router } from 'express';
import { CharacterController } from '../controllers/character.controller';

const route = Router();
const characterController = new CharacterController();

export default (app: Router) => {
    app.use('/character', route);
    route.get('/getAll', async (req: Request, res: Response) => {
        await characterController.getAll(req, res);
    });

    route.post('/create', async (req: Request, res: Response) => {
        await characterController.create(req, res);
    })
}