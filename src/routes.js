import { Router } from 'express';
import mongoose from 'mongoose';

const routes = new Router();



routes.get('/', (req, res) => {
    res.send("Server");
})

export default routes;