import * as Yup from 'yup';
import Rodape from '../models/Rodape';

class RodapeController{
    async show(req, res){
        Rodape.findOne({}).then((rodape) => {
            return res.json({
                error: false,
                rodape: rodape
            });
        }).catch((err) => {
            return res.status(400).json({
                error: true,
                code: 125,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        });
    };

    async store(req, res) {

        const dados = {
            tituloPg: "Celke",
            tituloCont: "Contato",
	        telCont:"(XX) XXXXX-XXXX",
            endCont: "Av. Winston Churchill",
            cnpjCont: "CNPJ: XX.XXX.XXX/XXXX-XX",
            tituloRedSoc: "Redes Sociais",
            instTitulo: "Instagram",
            instLink: "https://www.instagram.com/celkecursos",
            facTitulo: "Facebook",
            facLink: "https://www.facebook.com/celkecursos/",
            youtubeTitulo: "Youtube",
            youtubeLink: "https://www.youtube.com/channel/UC5ClMRHFl8o_MAaO4w7ZYug",
            twiterTitulo: "Twiter",
            twiterLink: "https://twitter.com/celkecursos"
        };
        
        const rodape = await Rodape.findOne({});
        if(rodape){
            return res.status(400).json({
                error: true,
                code: 126,
                message: "Erro: O rodapé já possui um registro!"
            });
        };

        const cadRodape = await Rodape.create(dados, (err) => {
            if (err) return res.status(400).json({
                error: true,
                code: 127,
                message: "Error: Dados do rodapé não foram cadastrado com sucesso!"
            });

            return res.json({
                error: false,
                message: "Dados do rodapé cadastrado com sucesso!"
            });
        });
    };

    async update(req, res){

        const schema = Yup.object().shape({
            tituloPg: Yup.string(), 
            tituloCont: Yup.string(),
            telCont: Yup.string(),
            endCont: Yup.string(),
            cnpjCont: Yup.string(),
            tituloRedSoc: Yup.string(),
            instTitulo: Yup.string(),
            instLink: Yup.string(),
            facTitulo: Yup.string(),
            facLink: Yup.string(),
            youtubeTitulo: Yup.string(),
            youtubeLink: Yup.string(),
            twiterTitulo: Yup.string(),
            twiterLink: Yup.string()
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                error: true,
                code: 124,
                message: "Erro: Dados do formulário inválido!"
            });
        };

        await Rodape.updateOne({}, req.body, (err) => {
            if(err) return res.status(400).json({
                error: true,
                message: "Erro: Conteúdo do rodapé não foi editado com sucesso!"
            });
        });

        return res.json({
            error: false,
            message: "Conteúdo do rodapé editado com sucesso!"
        });
    };

};

export default new RodapeController();