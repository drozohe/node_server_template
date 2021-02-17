class IConnection {
    constructor(){

    }
    // constructor(params){
    //     this.config = {
    //         p1: params.param1,
    //         p2: params.param2
    //     };

    //     console.log(`[super] p1: ${ this.config.p1 }, p2: ${ this.config.p2 }`);
    // }

    // get getConfig(){
    //     return config;
    // }

    // displayConfig(){
    //     console.log(JSON.stringify(this.config));
    // }

    // async connect(){
    //     console.log('[super] conectado');
    // }

    // async disconnect(){
    //     console.log('[super] des-conectado');

    // }

    tryConnect(param) {
        console.log("[super] try connect: " + param);
    }
};

module.exports = IConnection;