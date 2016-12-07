// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var icecreams = [
  {
    name: "vanilla",
    price: 10,
    awesomeness: 3
  }, {
    name: "chocolate",
    price: 4,
    awesomeness: 8
  },{
    name: "banana",
    price: 1,
    awesomeness: 1
  },{
    name: "greentea",
    price: 5,
    awesomeness: 7
  },{
    name: "jawbreakers",
    price: 6,
    awesomeness: 2
  }
  ];

// Routes
app.get("/icecream/:names", function(req, res) {
  var theparam = req.params.names;
  console.log(theparam);
  for(var i = 0; i < icecreams.length ; i++){
    if(icecreams[i].name === req.params.names){
      res.render("icecream", icecreams[i]);
    }
  }
  
});

app.get("/icecream", function(req, res) {
  res.render("allicecream", {
    theicecreams: icecreams
  });
});

// Initiate the listener.
app.listen(port);
