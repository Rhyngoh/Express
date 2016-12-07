//Set your dependencies here.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

//serve up assets folder and all content as static files from server to client.
app.use(express.static(path.join(__dirname,'assets')));

//use bodyParser, do not encode url.
app.use(bodyParser.urlencoded({
  extended: false
}));

//Import Routes.js and use this for all routing.
const routes = require('./routes.js');
app.use('/', routes);

//Ternary operator. If process.env.port is undefined, we use 9001. In either case, log result.
app.listen(process.env.PORT || 9001,function(){
  process.env.PORT == undefined? console.log("App listening on PORT OVER 9000!!"):console.log("App listening on PORT" + process.env.PORT);
});