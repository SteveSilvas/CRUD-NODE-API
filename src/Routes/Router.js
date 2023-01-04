const express = require('express');
require('dotenv').config({path: '../.env'});

const GenericController = require("../Controller/GenericController");

const routes = express.Router();

routes.get("/", (req, res) => {
    console.log("home: -" + process.env.DB_NAME + " - ");
    console.log(process.env);
})

routes.get("/list", GenericController.ListAll);

// routes.get("/add", GenericController.addGeneric("description with parameters"));

// routes.get("/update", GenericController.updateGeneric("Description changed"));

routes.get("/getbyid", GenericController.GetById);

module.exports = routes;