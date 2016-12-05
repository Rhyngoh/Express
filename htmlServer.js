var url = require("url");
var http = require("http");
var PORT = 8080;
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
	console.log("Server is running on " + PORT);
});
function handleRequest(req, res){
	var urlParts = url.parse(req.url);
	switch (urlParts.pathname){
		case "/":
			displayRoot(urlParts.pathname, req, res);
			break;
		case "/portfolio":
			displayPortfolio(urlParts.pathname, req, res);
			break;
		case "/edit":
			//displayEdit(urlParts.pathname, req, res);
			console.log("display:edit");
			break;
		default: //else
			display404(urlParts.pathname, req, res);
	}
}
function displayRoot(url, req, res){
	var myHTML = "<html>";
	myHTML += "<body><h1>Home Page</h1>";
	myHTML += "<a href='/portfolio'>Portfolio</a>";
	myHTML += "</body></html>";
	res.writeHead(200, {"Content-Type": "text/html"});//200 successful
	res.end(myHTML);
}
function displayPortfolio(url, req, res){
	var myHTML = "<html>";
	myHTML += "<body><h1>Portfolio</h1>";
	myHTML += "<a href='/'>Go Home</a><br>";
	myHTML += "<a href='https://www.google.com'>Portfolio</a>";
	myHTML += "</body></html>";
	res.writeHead(200, {"Content-Type": "text/html"});//200 successful
	res.end(myHTML);
}
function display404(url, req, res){
	res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}