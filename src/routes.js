import { Router } from 'express';
import mongoose from 'mongoose';

import UserController from './app/controllers/UserController';
import LoginController from './app/controllers/LoginController';
import PerfilController from './app/controllers/PerfilController';
import HomeController from './app/controllers/HomeController';
import RodapeControlle from './app/controllers/RodapeControlle';
import SobreController from './app/controllers/SobreController';

import authMiddleware from './app/middlewares/auth';
import InfoContatoController from './app/controllers/InfoContatoController';
import ContatoControlle from './app/controllers/ContatoControlle';

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
routes.post('/rodape', authMiddleware, RodapeControlle.store);
routes.put('/rodape', authMiddleware, RodapeControlle.update);

routes.get('/sobre', SobreController.show);
routes.post('/sobre', authMiddleware, SobreController.store);
routes.put('/sobre', authMiddleware, SobreController.update);

routes.get('/infocontato', InfoContatoController.show);
routes.post('/infocontato', authMiddleware, InfoContatoController.store);
routes.put('/infocontato', authMiddleware, InfoContatoController.update);

routes.get('/contato', authMiddleware, ContatoControlle.index);
routes.get('/contato/:id', authMiddleware, ContatoControlle.show);
routes.post('/contato', ContatoControlle.store);
routes.put('/contato', authMiddleware, ContatoControlle.update);
routes.delete('/contato/:id', authMiddleware, ContatoControlle.delete);

export default routes;
