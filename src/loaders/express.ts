import express from 'express';
import config from '../config';
import routes from '../api';
import { authenticated } from './jwt';

export default ({ app }: { app: express.Application }) => {
    /**
     * Health Check endpoints
     */
    app.get('/healthCheck', (req: express.Request, res: express.Response) => {
        res.status(200).send('OK');
    });

    app.get('/authHealthCheck', authenticated, (req: express.Request, res: express.Response) => {
        try {
            res.status(200).send('OK');
        } catch (e) {
            res.status(400).send('Invalid token');
        }
    });

    app.use(express.json());
    app.use(config.api.prefix, routes())
}