import mongoose from 'mongoose';

const Sobre = new mongoose.Schema({
    tituloPgSobre: {
        type: String,
        required: true
    },
    tituloSobre: {
        type: String,
        required: true
    },
    descSobre: {
        type: String,
        required: true
    },
    originalName: {
        type: String
    },
    fileName: {
        type: String
    }
},
{
    timestamps: true,
});

export default mongoose.model('sobre', Sobre);