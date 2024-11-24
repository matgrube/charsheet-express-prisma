import express from 'express';

const PORT = process.env.PORT || 9300;

async function startServer() {
    const app = express();

    await require('./loaders').default({expressApp: app});

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

startServer();