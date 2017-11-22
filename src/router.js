const handlers = require('./handlers');

const routes = {
    '/' : handlers.home,
    '404' : handlers.notFound
}

module.exports = function(request, response) {
    if (routes[request.url]) {
        routes[request.url](request, response);
    } else {
        routes[404](request, response);
    }
}