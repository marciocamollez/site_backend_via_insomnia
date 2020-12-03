import Home from '../models/Home';

class HomeController {
    async show(req, res) {

        Home.findOne({}).then((home) => {
            return res.json({
                error: false,
                home: home
            });
        }).catch((err) => {
            return res.status(400).json({
                error: true,
                code: 123,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        });
    }

    async store(req, res) {

        const dados = {
            tituloTopo: "Temos a solução que a sua empresa precisa 1",
            descTopo: "This is a modified jumbotron that occupies the entire horizontal space of its parent.",
	        tituloBtnTopo:"ENTRE EM CONTATO",
            linkBtnTopo: "/contato",
            tituloServ: "First featurette heading.",
            descServ: "Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
            iconeUmServ: "coffee",
            iconeDoisServ: "lightbulb",
            iconeTresServ: "warehouse",
            tituloVideo: "Vídeo",
            descTituloVideo: "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna.",
            embedVideo: "<iframe className='embed-responsive-item' src='https://www.youtube.com/embed/bWEJu6W5Fn4?rel=0'></iframe>",
            tituloProj: "Projetos",
            iconeUmProj: "ad",
            tituloUmProj: "Titulo 1",
            descUmProj: "Praesent id ligula porta felis euismod semper commodo.",
            iconeDoisProj: "address-book",
            tituloDoisProj: "Titulo 2",
            descDoisProj: "Praesent id ligula porta felis euismod semper commodo.",
            iconeTresProj: "award",
            tituloTresProj: "Titulo 3",
            descTresProj: "Praesent id ligula porta felis euismod semper commodo.",
            iconeQuatroProj: "beer",
            tituloQuatroProj: "Titulo 4",
            descQuatroProj: "Praesent id ligula porta felis euismod semper commodo.",
        };
        
        const homeExiste = await Home.findOne({});
        if(homeExiste){
            return res.status(400).json({
                error: true,
                code: 122,
                message: "Erro: A página home já possui um registro!"
            })
        }

        const home = await Home.create(dados, (err) => {
            if (err) return res.status(400).json({
                error: true,
                code: 121,
                message: "Error: Dados da página home não foram cadastrado com sucesso!"
            });

            return res.json({
                error: false,
                message: "Dados da página home cadastrado com sucesso!"
            })
        });

        /*
{
	"tituloTopo": "Temos a solução que a sua empresa precisa",
	"descTopo": "This is a modified jumbotron that occupies the entire horizontal space of its parent.",
	"tituloBtnTopo":"ENTRE EM CONTATO",
	"linkBtnTopo": "/contato",
	"tituloServ":"First featurette heading.",
	"descServ":"Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
	"iconeUmServ": "coffee",
	"iconeDoisServ": "lightbulb", 
	"iconeTresServ":"warehouse",
	"tituloVideo": "Vídeo",
	"descTituloVideo": "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna.",
	"embedVideo": "<iframe className='embed-responsive-item' src='https://www.youtube.com/embed/bWEJu6W5Fn4?rel=0'></iframe>",
	"tituloProj": "Projetos",
	"iconeUmProj": "ad",
	"tituloUmProj": "Titulo 1",
	"descUmProj": "Praesent id ligula porta felis euismod semper commodo.",
	"iconeDoisProj": "address-book",
	"tituloDoisProj": "Titulo 2",
	"descDoisProj": "Praesent id ligula porta felis euismod semper commodo.",
	"iconeTresProj": "award",
	"tituloTresProj": "Titulo 3",
	"descTresProj": "Praesent id ligula porta felis euismod semper commodo.",
	"iconeQuatroProj": "beer",
	"tituloQuatroProj": "Titulo 4",
	"descQuatroProj":	"Praesent id ligula porta felis euismod semper commodo."
}
        */
    }
}

export default new HomeController();