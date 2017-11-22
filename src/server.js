const http = require("http");
const router = require('./router');

var port = process.env.port || 9000;
var app = function (request, response) {
    router(request, response);
};

http.createServer(app).listen(port);
console.log('server listening on port', port);
