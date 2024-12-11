import { Request, Response, Router } from "express";
import { GameplayController } from "../controllers/gameplay.controller";

const route = Router();
const gamePlayController = new GameplayController();

export default (app:  Router) => {
    app.use('/gameplay', route);

    route.get('/diceroll', async(req, res) => {
        await gamePlayController.rollDice(req, res);
    })
}