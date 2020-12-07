import Sobre from '../models/Sobre';
import fs from 'fs';

class SobreImagemController{
    async update(req, res){
        //console.log(req.file);

        const dadosImagem = {
            originalName: req.file.originalname,
            fileName: req.file.filename
        }

        await Sobre.findOne({}, '_id fileName').then((sobre) => {
            //console.log(sobre);
            req.dadosSobre = sobre.fileName;
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

        const imgAntiga = req.file.destination + "/" + req.dadosSobre;

        fs.access(imgAntiga, (err) => {
            if(!err){
                fs.unlink(imgAntiga, err =>{
                    //Msg imagem excluida sucesso
                });
            };
        });

        return res.json({
            error: false,
            message: "Imagem da página sobre editado com sucesso!"
        });
    };
};

export default new SobreImagemController();