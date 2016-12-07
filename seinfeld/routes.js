const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mysql = require('mysql');
const router = express.Router();
const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'seinfeld_db'
});

connection.connect();
router.get("/cast", function(req, res){
	connection.query("SELECT * FROM actors", function(err,data){
		if (err) throw err;
		var html = "<h1> Cast of actors </h1>";
		for (var i = 0; i < data.length; i++){
			html += "<ul><li>Actor Name: " + data[i].actorname + "</li>";
			html += "<li>Coolness Points: " + data[i].coolness_points + "</li>";
			html += "<li>Attitude: " + data[i].attitude + "</li></ul>";
		}
		res.send(html);
	});
});
router.get("/coolness-chart", function(req,res){
	connection.query("SELECT * FROM actors ORDER BY coolness_points ASC", function(err,data){
		if(err) throw err;
		var html = "<h1> Actors by Coolness Points </h1>";
		for (var i = 0; i < data.length; i++){
			html += "<ul><li>Actor Name: " + data[i].actorname + "</li>";
			html += "<li>Coolness Points: " + data[i].coolness_points + "</li>";
			html += "<li>Attitude: " + data[i].attitude + "</li></ul>";
		}
		res.send(html);
	});
});

router.get("/attitude-chart/:theAttitude", function(req, res){
	var theAttitude = req.params.theAttitude;
	connection.query("SELECT * FROM actors WHERE attitude = ?", [theAttitude], function(err, data){
		if(err) throw err;
		var html = "<h1> Actors by Coolness Points </h1>";
		for (var i = 0; i < data.length; i++){
			html += "<ul><li>Actor Name: " + data[i].actorname + "</li>";
			html += "<li>Coolness Points: " + data[i].coolness_points + "</li>";
			html += "<li>Attitude: " + data[i].attitude + "</li></ul>";
		}
		res.send(html);
	});
});
module.exports = router;