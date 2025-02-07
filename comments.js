// Create web server
// node comments.js

// Load the http module to create an http server.
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var name = query.name;
  var email = query.email;
  var comment = query.comment;

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Name: " + name + "\nEmail: " + email + "\nComment: " + comment + "\n");
});

// Listen on port 8000, IP defaults to
server.listen(8000);

