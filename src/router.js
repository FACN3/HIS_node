const { staticFiles, model, html, heandleError } = require("./handlers");

const routes = {
  "/": html,
  "/style.css": staticFiles,
  "/logic.js": staticFiles,
  "404": heandleError
};

module.exports = (request, response) => {
  if (routes[request.url]) {
    routes[request.url](request, response, request.url);
  } else if (request.url.split("?")[0] === "/model") {
    handlers.model(request, response);
  } else {
    routes[404]("404, page not found");
  }
};
