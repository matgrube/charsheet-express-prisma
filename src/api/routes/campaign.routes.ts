import {Request, Response, Router} from 'express';
import {CampaignController} from "../controllers/campaign.controller";

const route = Router();
const campaignController = new CampaignController();

export default (app: Router) => {
    app.use('/campaign', route);

    route.get('/getAll', async (req: Request, res: Response) => {
        await campaignController.getAll(req, res);
    });

    route.post('/create', async (req: Request, res: Response) => {
        await campaignController.create(req, res);
    })

    route.put('/assignPlayer', async (req: Request, res: Response) => {
        await campaignController.assignPlayer(req, res);
    })
}