const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './config/app/app_vars.env')});

const bodyParser = require('body-parser');
const cors = require('cors');

const Server = require(path.resolve(__dirname, "./models/server"));

const server = new Server();



server.listen();






// const ConnectionFactory =  require('../classes/factory/ConnectionFactory');



// const factory = new ConnectionFactory();

// let cx1 = factory.createConnection('MSSQL');


// cx1.doConnect().then( result =>{
//     console.log(result);
// }).catch( err =>{
//     console.log(`Err: ${ err }`);
// });



