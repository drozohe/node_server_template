const path = require('path');
const express = require('express');

class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app  = express();

        this.paths = {
            usuarios: '/api/users',
            codigos2d: '/api/2d'
        };

        Object.freeze(this.paths);

        //Middlewares
        this.middlewares();

        //rutas de la app
        this.routes();
    }

    middlewares(){

        //configurar el directorio publico
        this.app.use(express.static('public'));

        //lectura y parseo del body
        this.app.use(express.json());
    }

    routes(){
        //configuracion de rutas de la app
        this.app.use(this.paths.usuarios, require('../routes/users.routes'));
        this.app.use(this.paths.codigos2d, require('../routes/cod2d.routes'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`escuchando en el puerto ${ this.port }`);
        })
    }
}


module.exports = Server;