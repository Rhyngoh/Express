//listen to HTTP request and send back HTTP responses
var http = require("http");
var express = require("express");
var app = express();

var PORT1 = 7000; //node port
var PORT2 = 7500;

/*app.use(express.static("Express"));
app.set("view engine", "html");
app.render("someHTML", function(err, html){
	console.log("Yo");
});*/

function handleRequest1(request, response){
	response.end("Steve has unusually smooth skin." + request.url);
}

function handleRequest2(request, response){
	response.end("Steve shouldn't have shaved." + request.url);
}
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
	console.log("Server listening on http://localhost:%s", PORT1);
});
server2.listen(PORT2, function() {
	console.log("Server listening on http://localhost:%s", PORT2);
});