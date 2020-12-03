import Home from '../models/Home';

class HomeController{
    async show(req, res){
        return res.json({
            error: false,
            message: "Visualizar"
        });
    }
}

export default new HomeController();