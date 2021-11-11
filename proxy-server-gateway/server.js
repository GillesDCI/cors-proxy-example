const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({target:'http://localhost:4000', changeOrigin:false}))

app.listen(5000, () => {
    console.log("The proxy server is listening")
})