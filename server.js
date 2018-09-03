var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('This is the new world CM2\n');
}).listen(8080);

console.log('Server started');