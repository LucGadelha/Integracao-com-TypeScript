import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)
app.use(router);

export default app;
