import mongoose from 'mongoose';

class DataBase {
    constructor() {
        this.mongoDataBase();
    }
    mongoDataBase() {
        //Conexão com o Banco de Dados
        mongoose.connect('mongodb://localhost/db_site_react', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Conexão realizada com sucesso!");
        }).catch((erro) => {
            console.log("Conexão falhou: " + erro);
        });
    }
}

export default new DataBase();