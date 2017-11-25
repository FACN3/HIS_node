const getData = require('./model');
const fs = require('fs');
const path = require('path');

const handlers = {};

handlers.html =  (request, response) => {
    const endpoint = request.url;
    if (endpoint === '/') {
        fs.readFile(__dirname + '/../public/index.html',
             (error, file) => {
                if (error) {
                    heandleReadFileError(error);
                }
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(file);
            });
    }
}

handlers.staticFiles =  (request, response) => {
    const endpoint = request.url;
    const extension = request.url.split('.')[1];
    const extensionType = {
        'html': 'text/html',
        'css': 'text/css',
        'js': 'javascript/application'
    }[extension];

    fs.readFile(__dirname + '/../public/' + request.url,
        function (error, file) {
            if (error) {
                heandleReadFileError(error);
            }
            response.writeHead(200, { 'Content-Type': extensionType });
            response.end(file);
        });
}

handlers.model =  (request, response) => {
    getData(request.url,  (error, purpose) => {
        if (error) {
            heandleReadFileError(error);
        }
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(purpose));
    });
}

handlers.notFound =  (request, response) => {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('Resources not found');
}

 handlers.heandleReadFileError = (error) => {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('error geting data from wiki', error);
}

module.exports = handlers;
