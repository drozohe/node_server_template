const {response} = require('express');


const get =  (req,res = response)=>{
    res.json({
        msg: 'get 2d api from controller'
    });
};

const put = (req,res)=>{
    res.status(500).json({
        msg: 'put 2d api from controller'
    });
};

const post = (req,res)=>{

    //los datos recibidos en la peticion llegan en el request
    const body = req.body;
    res.status(201).json({
        msg: 'post 2d api from controller',
        body: body
    });
};

const del = (req,res)=>{
    res.json({
        msg: 'delete 2d api from controller'
    });
}

module.exports = {

    get,
    put,
    post,
    del,

};