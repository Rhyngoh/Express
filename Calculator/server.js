const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
//app.use(express.static(path.join(__dirname,'assets')));
app.use(bodyParser.urlencoded({
	extended:false
}));
const routes = require("./routes.js");
app.use('/', routes);
app.listen(process.env.PORT || 3000, function(){
	process.env.PORT == undefined ? console.log("App listening on port 3000"): console.log("App listening on port" + process.env.PORT);
});