import { Router } from 'express';
import mongoose from 'mongoose';
import User from './app/models/User';


const routes = new Router();

routes.get('/', async (req, res) => {
    await User.create({
        nome: 'Marcio',
        email: 'marciocamollez@hotmail.com',
        senha: '123456'
    }, function(err, small){
        if(err) return res.status(400).json({error: "Erro: Usuário não foi cadstrado com sucesso!"});

        return res.status(200).json({error: "Usuário cadastrado com sucesso!"});
    });
    
})

routes.get('/contatos', (req, res) => {
    res.send("Cesar, Kelly, Jessica, Marcos");
})

//module.exports = routes;
export default routes;
