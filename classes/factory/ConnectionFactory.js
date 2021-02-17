
const db2Connection = require('../db/cnx_DB2');
const mssqlConnection = require('../db/cnx_MSSQL');


class ConnectionFactory{
    createConnection(motor){
        switch (motor){
            case 'MSSQL':

                return mssqlConnection.getInstance();
            case 'DB2':
                return new db2Connection("x1","x2");

            case 'MONGO':
                break;
            default:
                break;
        }
    }
}
module.exports = ConnectionFactory;
