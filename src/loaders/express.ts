import express from 'express';
import config from '../config';
import routes from '../api';

export default ({app}: { app: express.Application }) => {
    /**
     * Health Check endpoints
     */
    app.get('/healthCheck', (req: express.Request, res: express.Response) => {
        res.status(200).send('OK');
    });

    app.use(express.json());
    app.use(config.api.prefix, routes())
}