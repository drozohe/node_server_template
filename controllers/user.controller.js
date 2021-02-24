const {response} = require('express');


const get =  (req,res = response)=>{
    res.json({
        msg: 'get USER api from controller'
    });
};

const put = (req,res)=>{
    res.status(500).json({
        msg: 'put USER api from controller'
    });
};

const post = (req,res)=>{
    res.status(201).json({
        msg: 'post USER api from controller'
    });
};

const del = (req,res)=>{
    res.json({
        msg: 'delete USER api from controller'
    });
}

module.exports = {

    get,
    put,
    post,
    del,

};