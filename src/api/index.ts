import {Router} from "express";
import user from "./routes/user.routes";
import campaign from "./routes/campaign.routes";


export default () => {
    const app = Router();
    user(app);
    campaign(app);
    return app
}