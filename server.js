import express from 'express';
import { config } from 'dotenv';
import connectToDB from './config/db.js';

config();
const PORT = process.env.PORT || 8080; 

const app = express();

app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' });
});

app.listen(PORT, async () => {
    await connectToDB()
    console.log(`Server is running on port ${PORT}`);
});

app.all('*', (_req, res) => {
    res.status(404).send('OOPS!!! 404 Page Not Found');
});