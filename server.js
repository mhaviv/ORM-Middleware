var express = require('express');
var app = express();
var ormLite = require('./orm-lite');
var test_user = ormLite.test_user;

var getAll = function(req, res, next){
	console.log('orm-lite');
	
	ormLite.getAll(test_user, function(data){
		console.log(data);
	})

	next()
}

var getByID = function(req, res, next){
	console.log('orm-lite');
	
	ormLite.findById(2,test_user, function(data){
		console.log(data);
	})

	next()
}

app.use(getAll);
app.use(getByID);


app.get('*',function(req, res){
	res.send('ORM is Here!')
})


app.listen(3000,function(){

	console.log('listening at 3000');
})
