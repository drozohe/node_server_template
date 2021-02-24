const path = require('path');
const express = require('express');

class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app  = express();

        //Middlewares
        this.middlewares();

        //rutas de la app
        this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get("/codigos2d", (req,res)=>{
            res.send("Entoes...");
        });
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`escuchando en el puerto ${ this.port }`);
        })
    }
}


module.exports = Server;