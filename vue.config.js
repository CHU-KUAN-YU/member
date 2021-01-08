const express = require("express");
const app = express();
const show = require('./data.json');
// const apiRoutes = express.Router();

module.exports = {
    publicPath: process.env.NODE_ENV == 'production' ? '/member/' : './',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    devServer: {
        before: function(app, server){
            app.get('/api/show',(req, res) =>{
                res.json({
                    data: show
                })
            })
        },
        open: true,
    }
}