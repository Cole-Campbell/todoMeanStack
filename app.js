var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.set('view engine', 'ejs');
app.use("/assets", express.static(__dirname + '/public'));

//Adds seed data to Database
setupController(app);
apiController(app);

mongoose.connect(config.getDbConnectionString());

app.listen(3000, function(){
	console.log("Listening on Port 3000");
});

app.get("/", function(req,res){
	res.render('index');
});