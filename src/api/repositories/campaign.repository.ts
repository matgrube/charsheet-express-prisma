import {Repository} from "../../cores/Repository";
import {Campaign, PlayerCampaign} from "@prisma/client";

export class CampaignRepository extends Repository {
    constructor() {
        super();
    }

    async create(campaign: Campaign): Promise<Campaign> {
        try {
            return await this.prismaClient.campaign.create({data: campaign})
        } catch (e) {
            throw e;
        } finally {
            await this.prismaClient.$disconnect()
        }
    };

    async getAll(): Promise<Campaign[]> {
        try {
            return await this.prismaClient.campaign.findMany({
                include: {
                    owner: true,
                    players: true
                }
            });
        } catch (e) {
            throw e;
        } finally {
            await this.prismaClient.$disconnect()
        }
    };

    async addPlayer(campaignId: number, playerId: number): Promise<PlayerCampaign> {
        try {
            return await this.prismaClient.playerCampaign.create(
                {
                    data: {
                        playerId,
                        campaignId
                    }
                });

        } catch (e) {
            throw e;
        } finally {
            await this.prismaClient.$disconnect();
        }
    }
}