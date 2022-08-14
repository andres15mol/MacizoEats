var express = require('express');
var router = express.Router();
var cliente = require('../models/clientes');
var mongoose = require('mongoose');

//Servicio para obtener usuarios
router.get('/',function(req,res){
    cliente.find({},{_id:true,nombre:true})
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;