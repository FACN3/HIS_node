const handlers = require('./handlers');

const routes = {
    '/' : handlers.html,
    '/style.css' : handlers.staticFiles,
    '/logic.js'  : handlers.staticFiles,
    '404' : handlers.heandleError
}

module.exports = (request, response) => {
    if (routes[request.url]) {
        routes[request.url](request, response ,request.url);
    }else if (request.url.split('?')[0] === '/model'){
        handlers.model(request, response);
    } else {
        routes[404]('404, page not found');
    }
}
