var http = require("http"); //we can import on predefined module

http.createServer(function(request, response) {

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200);

    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8071);

// Console will print the message
console.log('Server running at http://127.03.0.1:8071/');