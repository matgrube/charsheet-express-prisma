import { application, Router } from "express";
import user from "./routes/user.routes";
import campaign from "./routes/campaign.routes";
import character from "./routes/character.routes";
import gameplay from "./routes/gameplay.routes";
import auth from "./routes/auth.routes";


export default () => {
    const app = Router();
    user(app);
    campaign(app);
    character(app);
    gameplay(app);
    auth(app)
    return app
}