


const ConnectionFactory =  require('../classes/factory/ConnectionFactory');
//const IConnection = require('../interfaces/IConnection');


const factory = new ConnectionFactory();

let cx1 = factory.createConnection('MSSQL');


cx1.doConnect().then( result =>{
    console.log(result);
}).catch( err =>{
    console.log(`Err: ${ err }`);
});



