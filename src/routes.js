import { Router } from 'express';
import mongoose from 'mongoose';

import UserController from './app/controllers/UserController';
import LoginController from './app/controllers/LoginController';
import PerfilController from './app/controllers/PerfilController';
import HomeController from './app/controllers/HomeController';
import RodapeControlle from './app/controllers/RodapeControlle';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);
routes.delete('/users/:id', authMiddleware, UserController.delete);

routes.get('/perfil', authMiddleware, PerfilController.show);
routes.put('/perfil', authMiddleware, PerfilController.update);

routes.post('/login', LoginController.store);

routes.get('/home', HomeController.show);
routes.post('/home', authMiddleware, HomeController.store);
routes.put('/home', authMiddleware, HomeController.update);

routes.get('/rodape', RodapeControlle.show);
routes.post('/rodape', RodapeControlle.store);
routes.put('/rodape', RodapeControlle.update);

export default routes;
