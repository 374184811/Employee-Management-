var app = angular.module('App',['ngRoute']);

app.config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'Templates/home.html',
    controller: 'mainCtrl'
  });
  $routeProvider.when('/GetEmployee/:id', {
    templateUrl: 'Templates/GetEmployee.html',
    controller: 'GetEmployeeCtrl'
  });
   $routeProvider.when('/GetSalary/:id', {
    templateUrl: 'Templates/GetSalary.html',
    controller: 'GetSalaryCtrl'
  });
   $routeProvider.when('/GetEmployeeAndSalary/:id', {
    templateUrl: 'Templates/GetEmployeeAndSalary.html',
    controller: 'GetEmployeeAndSalaryCtrl'
  });
 
  $routeProvider.otherwise({ redirectTo: '/' });

});

app.controller('mainCtrl',function($scope,$http){

	$http.get('/home')
	.success(function(data) {
	  $scope.employees = data.results;
	  // console.log($scope.employees);
	})
	.error(function(data) {
	  console.log('Error: ' + data);
	});

});

app.controller('GetEmployeeCtrl',function($scope,$http,$routeParams){
	var id = $routeParams.id;

	$http.get('/GetEmployee/'+id)
	.success(function(data) {
	  $scope.employee = data;
	   //console.log($scope.employee);
	})
	.error(function(data) {
	  console.log('Error: ' + data);
	});

});

app.controller('GetSalaryCtrl',function($scope,$http,$routeParams){
	var id = $routeParams.id;

	$http.get('/GetSalary/'+id)
	.success(function(data) {
	  $scope.employee = data;
	   //console.log($scope.employee);
	})
	.error(function(data) {
	  console.log('Error: ' + data);
	});

});

app.controller('GetEmployeeAndSalaryCtrl',function($scope,$http,$routeParams){
	var id = $routeParams.id;

	$http.get('/GetEmployeeAndSalary/'+id)
	.success(function(data) {
	  $scope.employee = data;
	   //console.log($scope.employee);
	})
	.error(function(data) {
	  console.log('Error: ' + data);
	});

});