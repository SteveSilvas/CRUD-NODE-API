const express = require('express');
require('dotenv').config({path: '../.env'});

const GenericController = require("../Controller/GenericController");

const routes = express.Router();

// testes
routes.get("/", (req, res) => {
    console.log("home: -" + process.env.DB_NAME + " - ");
})

routes.get("/batata", ()=>{
    console.log("BATATA");
});



routes.get("/generics/", GenericController.ListAll);

routes.put("/generics/add", GenericController.addGeneric);

routes.post("/generics/update", GenericController.updateGeneric);

routes.get("/generics/getbyid", GenericController.GetById);

routes.delete("/generics/delete", GenericController.deleteGeneric)


module.exports = routes;