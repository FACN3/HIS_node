const getData = require("./model");
const fs = require("fs");
const path = require("path");

const handlers = {};

handlers.html = (request, response) => {
  handlers.staticFiles(request, response, "/index.html");
};

handlers.staticFiles = (request, response, url) => {
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "javascript/application"
  }[extension];

  fs.readFile(__dirname + "/../public/" + url, function(error, file) {
    if (error) {
      heandleError(error, request, response);
    }
    response.writeHead(200, { "Content-Type": extensionType });
    response.end(file);
  });
};

handlers.model = (request, response) => {
  getData(request.url, (error, purpose) => {
    if (error) {
      heandleError(error, request, response);
    }
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(purpose));
  });
};

handlers.heandleError = (error, request, response) => {
  response.writeHead(404, { "Content-Type": "text/html" });
  response.end(`Sorry, an error has occurred${error}`);
};

module.exports = handlers;
