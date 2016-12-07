// Dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");
// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
	var urlParts = url.parse(req.url);
	switch(urlParts.pathname){
		case "/":
			displayRoot(urlParts.pathname, req, res);
			break;
		case "/food":
			displayFood(urlParts.pathname, req, res);
			break;
		case "/movies":
			displayMovies(urlParts.pathname, req, res);
			break;
		case "/frameworks":
			displayFrameworks(urlParts.pathname, req, res);
			break;
		default:
			display404(urlParts.pathname, req, res);
	}

}
function displayRoot(url, req, res){
	fs.readFile("home.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
	});
}
function displayFood(url, req, res){
	fs.readFile("food.html", function(err, data) {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
	});
}
function displayMovies(url, req, res){
	fs.readFile("movies.html", function(err, data) {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
	});
}
function displayFrameworks(url, req, res){
	fs.readFile("frameworks.html", function(err, data) {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
	});
}
function display404(url, req, res){
	res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1><br><a href='/'>Return Home</a><br>");
  res.end("The page you were looking for: " + url + " can not be found ");
}
// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});


