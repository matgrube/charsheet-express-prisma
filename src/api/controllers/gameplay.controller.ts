import { Request, Response } from "express";
import {DicerollService} from "../../services/diceroll.service";

export class GameplayController {
    diceRollService = new DicerollService();
    constructor() {};

    async rollDice(req: Request, res: Response) {
        try {
            const result = await this.diceRollService.run(req.body);
            return res.json(result).status(200);
        } catch (e) {throw e}
    }
}