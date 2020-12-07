import fs from 'fs';

class SobreImagemController{
    async update(req, res){
        return res.json({
            error: false,
            message: "Sobre Imagem Controller"
        })
    };
};

export default new SobreImagemController();