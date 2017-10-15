var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use("/assets", express.static(__dirname + '/public'));

app.listen(3000, function(){
	console.log("Listening on Port 3000");
});

app.get("/", function(req,res){
	res.render('index');
});