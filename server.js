var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/www')); 

app.get('/home', function(req, res){

	 fs.readFile('sample-data.json', function(err, data){
	 	if(err)
	 		res.send(err);
	 	else
	 		res.json(JSON.parse(data));
  });
});

app.get('/GetEmployee/:id', function(req, res){

	 fs.readFile('sample-data.json', function(err, data){
	 	if(err)
	 		res.send(err);
	 	else{
	 		var employees = JSON.parse(data).results;
	 		for(var item in employees){
	 			if(employees[item].id === req.params.id)
	 				res.json(employees[item]);
	 		}
	 	}
  });
});

app.get('/GetSalary/:id', function(req, res){

	 fs.readFile('sample-data.json', function(err, data){
	 	if(err)
	 		res.send(err);
	 	else{
	 		var employees = JSON.parse(data).results;
	 		for(var item in employees){
	 			if(employees[item].id === req.params.id)
	 				res.json(employees[item]);
	 		}
	 	}
  });
});

app.get('/GetEmployeeAndSalary/:id', function(req, res){

	 fs.readFile('sample-data.json', function(err, data){
	 	if(err)
	 		res.send(err);
	 	else{
	 		var employees = JSON.parse(data).results;
	 		for(var item in employees){
	 			if(employees[item].id === req.params.id)
	 				res.json(employees[item]);
	 		}
	 	}
  });
});

app.listen(3000);
console.log('app is listening at localhost:3000');