const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const router = express.Router();
let firstNumber = "";
let secondNumber = "";
let solution = "";
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "calculator.html"));
});
router.get('/addition/:firstNumber?/:secondNumber?', function(req, res) {
	let first = req.params.firstNumber;
	let second = req.params.secondNumber;
	solution = parseInt(first) + parseInt(second);
	console.log(solution);
	res.send("<h2>" + solution + "</h2>");
});
router.get('/subtraction/:firstNumber?/:secondNumber?', function(req, res) {
	let first = req.params.firstNumber;
	let second = req.params.secondNumber;
	solution = parseInt(first) - parseInt(second);
	console.log(solution);
	res.send("<h2>" + solution + "</h2>");
});
router.get('/multiplication/:firstNumber?/:secondNumber?', function(req, res) {
	let first = req.params.firstNumber;
	let second = req.params.secondNumber;
	solution = parseInt(first) * parseInt(second);
	console.log(solution);
	res.send("<h2>" + solution + "</h2>");
});
router.get('/division/:firstNumber?/:secondNumber?', function(req, res) {
	let first = req.params.firstNumber;
	let second = req.params.secondNumber;
	solution = parseInt(first) / parseInt(second);
	console.log(solution);
	res.send("<h2>" + solution + "</h2>");
});
module.exports = router;