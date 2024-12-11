import express from 'express';
import loaders from './loaders'

const PORT = process.env.PORT || 9300;

async function startServer() {
    const app = express();

    await loaders({expressApp: app});

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

startServer();