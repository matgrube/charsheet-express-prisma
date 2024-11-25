import {CampaignRepository} from "../repositories/campaign.repository";
import { Request, Response } from "express";
import {Campaign} from "@prisma/client";

export class CampaignController {
    campaignRepository = new CampaignRepository();
    constructor() {};

    async getAll(req: Request, res: Response) {
        try {
            const result = await this.campaignRepository.getAll();
            return res.json(result).status(200);
        } catch (e) {throw e}
    };

    async create (req: Request, res: Response) {
        try {
            const body = req.body;
            await this.campaignRepository.create(req.body);
            return res.json({body}).status(200);
        } catch (e) {throw e}
    };

    async assignPlayer (req: Request, res: Response) {
        try {
            const { playerId, campaignId } = req.body;
            await this.campaignRepository.addPlayer(campaignId, playerId);
            return res.json({data: req.body}).status(200);
        } catch (e) {throw e}
    }

}