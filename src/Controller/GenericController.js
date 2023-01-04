const GenericModel = require('../Model/GenericModel');
const database = require('../Model/Connection');
const { response } = require('express');
database.sync();

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
            const generic = await GenericModel.findByPk(req.body.Id);
            return res.json(generic);
        } catch (error) {
            return console.log("Erro na lista de produtos: " + error);
        }
    },

    async addGeneric(req, res){
        try {
            const generic = await GenericModel.create({
                Description: req.body.Description
            });
            return console.log("Registro adicionado com sucesso. " + res.json(generic));
            
        } catch (error) {
            return console.log("Erro ao adicionar produto: " + error)
        }
    },

    async updateGeneric(req, res){
        try {
            const genericModel = await GenericModel.findByPk(req.body.Id);
            if(genericModel){
                genericModel.Description = req.body.Description;
                genericModel.save();
            }

            return console.log("Registro alterado com sucesso. "+ res.json(genericModel));
            
        } catch (error) {
            return console.log("Erro ao alterar produto: " + error);
        }
    },

    async deleteGeneric(req, res){
        try {
            const genericModel = await GenericModel.findByPk(req.body.Id);
            await genericModel.destroy();
            return console.log("Registro excluído com sucesso.");
        } catch (error) {
            return console.log("Erro ao deletar produto: " + error);
        }
    }

}