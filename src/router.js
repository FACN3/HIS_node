const handlers = require('./handlers');

const routes = {
    '/' : handlers.html,
    '/style.css' : handlers.staticFiles,
    '/logic.js'  : handlers.staticFiles,
    '404' : handlers.notFound
}

module.exports = (request, response) => {
    if (routes[request.url]) {
        routes[request.url](request, response);
    }else if (request.url.split('?')[0] === '/model'){
        handlers.model(request, response);
    } else {
        routes[404](request, response);
    }
}
