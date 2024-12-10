import { Request, Response, Router } from "express";
import { DicerollService } from "../../services/diceroll.service";

const route = Router();
const dicerollService = new DicerollService();

export default (app:  Router) => {
    app.use('/gameplay', route);

    route.get('/diceroll', async(req, res) => {
        dicerollService.run('d4');
        res.json([]).status(200);
    })
}