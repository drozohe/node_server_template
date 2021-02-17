const IConnection = require('../../interfaces/IConnection');
const mssql = require('mssql');

class PrivateCnx_MSSQL extends IConnection{
    constructor(){
        super();

        this.connectionParams = {
            user: 'sa',
            password: 'sql1234',
            database: 'Ingenieria2',
            server: '172.24.32.97',
            options: {
                trustedconnectio: false,
                enableArithAbort: true,
                encrypt: false
                //instancename: //nombre instancia
            }
        };
    }

    async doConnect() {
        try {

            let res = await mssql.connect(this.connectionParams);
            this.configDb = res.config;
            return {
                err: 0,
                connected: res._connected
            };

            //return res;

        } catch (error) {
            console.log(`Error: ${ error }`);
        }

    }
}

class cnx_MSSQL {
    constructor() {
        throw new Error("Use getInstance instead of new operator");
    }

    static getInstance(){
        if (!cnx_MSSQL.instance) {
            cnx_MSSQL.instance = new PrivateCnx_MSSQL();
        }

        return cnx_MSSQL.instance;
    }

};

module.exports = cnx_MSSQL;


// const configDb_Ingenieria = {
//     user: 'sa',
//     password: 'sql1234',
//     database: 'Ingenieria2',
//     options: {
//         trustedconnectio: false,
//         enableArithAbort: true,
//         encrypt: false
//         //instancename: //nombre instancia
//     }
// };

// module.exports = config;
