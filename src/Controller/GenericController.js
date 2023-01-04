const GenericModel = require('../Model/GenericModel');
const database = require('./Connection');
// await database.sync();

module.exports = {
    async ListAll(req, res){
        try {
            const genericsList = await GenericModel.findAll();
            return res.json(genericsList);
            
        } catch (error) {
            return console.log("Erro na lista de produtos: " + error);
        }
    },

    async GetById(req, res){
        try {
            const produtosList = await GenericModel.findByPk();
            return resp.json(produtosList);
        } catch (error) {
            return console.log("Erro na lista de produtos: " + error);
        }
    },

    async addGeneric(req, res){
        try {
            const generic = await GenericModel.create({
                Description: "new Generic"
            });
            console.log(generic);
        } catch (error) {
            return console.log("Erro ao adicionar produto: " + error)
        }
    }



}