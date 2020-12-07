import Sobre from '../models/Sobre';
import fs from 'fs';

class SobreImagemController{
    async update(req, res){
        console.log(req.file);

        const dadosImagem = {
            originalName: req.file.originalname,
            fileName: req.file.filename
        }

        await Sobre.findOne({}, '_id fileName').then((sobre) => {
            console.log(sobre);
        }).catch((err) => {
            return res.status(400).json({
                error: true,
                code: 127,
                message: "Erro: Não foi possível executar a solicitação!"
            })
        });

        await Sobre.updateOne({}, dadosImagem, (err) => {
            if(err) return res.status(400).json({
                error: true,
                code: 128,
                message: "Erro: Imagem da página sobre não foi editado com sucesso!"
            });
        });

        return res.json({
            error: false,
            message: "Sobre Imagem Controller"
        })
    };
};

export default new SobreImagemController();