const http = require("http");
const router = require('./router');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 9000;
const app = function (request, response) {
    console.log('server listening on port http://localhost:', port);
    router(request, response);
};

http.createServer(app).listen(port);
