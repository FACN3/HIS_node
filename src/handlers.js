const getData = require('./model');
const fs = require('fs');
const path = require('path');

const handlers = {};

handlers.html = function (request, response) {
    const endpoint = request.url;
    if (endpoint === '/') {
        fs.readFile(__dirname + '/../public/index.html',
            function (error, file) {
                if (error) {
                    console.log(request.url);
                    console.log('oh there is an error', error);
                    return;
                }
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(file);
            });
     }
}

handlers.staticFiles = function (request, response) {
    const endpoint = request.url;
    const extension = request.url.split('.')[1];
    const extensionType = {
        'html': 'text/html',
        'css': 'text/css',
        'js': 'javascript/application'
    }[extension];

    fs.readFile(__dirname + '/../public/'+ request.url,
    function (error, file) {
        if (error) {
            console.log(request.url);
            console.log('oh there is an error', error);
            return;
        }
        response.writeHead(200, { 'Content-Type': extensionType });
        response.end(file);
    });
}

handlers.model = function (request, response) {
    getData(request.url ,function (error,purpose){  
        if (error){
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end('error geting data from wiki', error);   
        }
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(purpose));
        });
}

handlers.notFound = function (request, response) {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('Resources not found');
}
module.exports = handlers;
