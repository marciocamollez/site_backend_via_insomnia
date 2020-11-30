//Carregando os módulos - Jeito antigo
//const express = require('express');
//const routes = require('./routes');

//Carregando os módulos - Jeito novo após instalar o sucrase
import express from 'express';
import routes from './routes';
import './database';

class App{
    constructor(){
        this.app = express();
        this.routes();
    }
    routes(){
        this.app.use(routes);
    }
}

//module.exports = new App().app;
export default new App().app;
