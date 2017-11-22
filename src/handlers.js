const data = require('./model');
const fs = require('fs');
const path = require('path');


// function setFileName(endPoint) {
//     if (endPoint === '/') {
//         return 'index.html';
//     }
// }

// function setHeaders(request) {
//     const extension = request.url.split('.')[1];
//     const extensionType = {
//         'html': 'text/html',
//         'css': 'text/css',
//         'js': 'javascript/application'
//     }[extension];
//     return extensionType;
// }
const handlers = {};

handlers.home = function (request, response) {
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
    }else{
        // var header = setHeaders(request);
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
}


handlers.notFound = function (request, response) {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('Resources not found');
}
module.exports = handlers;

