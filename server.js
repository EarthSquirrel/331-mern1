// server.js
const http = require("http");

http.createServer(function(request, response) {
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>" +
    "<h2>Britney Gibbs - d65q387</h2>" +
    "<p>Running node server on port 3304</p>");
   response.end();
}).listen(3004);
