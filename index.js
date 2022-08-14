var express = require("express");
var database = require("./modules/database");
var bodyParser = require("body-parser");
var usuariosRouter = require("./routers/usuarios-router");
var clientesRouter = require("./routers/clientes-router")
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public/client"));
app.use('/admin', express.static("public/administrative"));
app.use('/motorista', express.static("public/motorista"));
app.use('/usuarios',usuariosRouter);
app.use('/clientes',clientesRouter)



app.listen(5050, function(){
    console.log("Servidor en linea");
});