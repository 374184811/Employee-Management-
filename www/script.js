
var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination', 'ngRoute']);

myApp.service('service',function($http){      
      var employees=[];
      this.getData = function(arr){
         employees=arr;
      }
      this.listData=function(){
        return employees;
      }     
      this.deleteData=function(product){
        for(var i=0;i<employees.length;i++){
           if(employees[i]==product){
             employees.splice(i,1);
           }
        }
      }
      this.getid=function(product){
        for(var i=0;i<employees.length;i++){
           if(employees[i]==product){
             return i;
           }
        }
      }
      this.edit=function(){
      }
      });

var edit = true;
var error = false;
var incomplete = false; 
var currentPage=1;
var pageSize=10;

//controllers  
function MyController($scope,service,$http) {
    $scope.currentPage = currentPage;
    $scope.pageSize = pageSize;
    $scope.users= [];
    $scope.view_manager = false;
	$scope.view_direct = false;
	$scope.edit = edit;
	$scope.error = error;
	$scope.incomplete = incomplete; 

	Init();
	function Init(){
	$http.get("employees.json").success(function (response){
        service.getData(response.data);

    //  $scope.images=[];
    //  for(var i=0;i<12;i++){
    //    $scope.images.push(service.listData()[i]);
    //  }
      //users=service.listData();
	  $scope.users=service.listData();
      });
	}
	
	$scope.manageredit = function(id) {
    $scope.edit = true;
	$scope.temp = id;
    $scope.fName = $scope.users[id].fName;
	$scope.lName = $scope.users[id].lName;
    $scope.title = $scope.users[id].title;  
	$scope.sex = $scope.users[id].sex; 
	$scope.manager = $scope.users[id].manager; 
	$scope.direct = $scope.users[id].direct; 
	$scope.office = $scope.users[id].office; 
	$scope.cell = $scope.users[id].cell; 
	$scope.SMS = $scope.users[id].SMS; 
	$scope.email = $scope.users[id].email;  
	if($scope.manager==-1) $scope.view_manager = true;
	else $scope.view_manager = false;
    if($scope.direct.length===0) $scope.view_direct = true;
	else $scope.view_direct = false;
};

    $scope.directedit = function(direct) {
    $scope.direct = direct; 
	//alert($scope.direct);
   
};
  
  
  $scope.editUser = function(id) {
//alert($scope.users[1]);
 if (id == 'new') {
	$scope.view_manager = false;
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.fName = '';
	$scope.lName = '';
    $scope.title = '';
	$scope.sex = '';
	$scope.office = '';
	$scope.cell = '';
	$scope.SMS = '';
	$scope.manager = [];
	$scope.direct = [];
	$scope.imageUrl = '';
	$scope.email = '';
    } else { 
	//alert($scope.users[id-1].manager);
    $scope.edit = true;
	$scope.id = id;
    $scope.fName = $scope.users[id-1].fName;
	$scope.lName = $scope.users[id-1].lName;
    $scope.title = $scope.users[id-1].title;  
	$scope.sex = $scope.users[id-1].sex; 
	if ($scope.users[id-1].manager==-1) $scope.manager = [];
	else $scope.manager = $scope.users[id-1].manager; 
	$scope.direct = $scope.users[id-1].direct; 
	$scope.office = $scope.users[id-1].office; 
	$scope.cell = $scope.users[id-1].cell; 
	$scope.SMS = $scope.users[id-1].SMS;
	$scope.imageUrl = $scope.users[id-1].imageUrl;
	$scope.email = $scope.users[id-1].email; 
	if($scope.users[id-1].manager==-1) $scope.view_manager = true;
	else $scope.view_manager = false;
    if($scope.direct.length===0) $scope.view_direct = true;
	else $scope.view_direct = false;
	} 
   
};
   

$scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
  };
}

function MyController2($scope,service,$http) {
	var managerid;
	 $scope.addNewUser = function() {
		switch ($scope.managerid){
			case 'Empty': managerid=-1;break;
			case 'James King': managerid=0;break;
			case 'Eugene Lee': managerid=1;break;
			case 'Paul Jones': managerid=2;break;
			case 'Julie Taylor': managerid=3;break;
			case 'Ray Moore': managerid=4;break;
			case 'John Williams': managerid=5;break;
		}
	 // alert($scope.fName +" "+ $scope.lName + " is added" + $scope.name);
	  $scope.users.push({id:$scope.users.length+1, fName:$scope.fName, lName:$scope.lName, 
	  sex:$scope.sex, title:$scope.title, manager:managerid, direct:$scope.direct, 
	  office: $scope.office, cell:$scope.cell, SMS:$scope.SMS, imageUrl:$scope.imageUrl,
	  email:$scope.email});
	  //change manager direct
	  $scope.users[managerid].direct.push($scope.users.length-1);
	  alert($scope.users[$scope.users.length].fName);
  };

$scope.$watch('passw.pass1',function() {$scope.test();});
$scope.$watch('passw.pass2',function() {$scope.test();});
 $scope.$watch('office',function() {$scope.test1($scope.office);});
 $scope.$watch('cell',function() {$scope.test1($scope.cell);});
$scope.$watch('SMS',function() {$scope.test1($scope.SMS);});

$scope.test = function() {
  if ($scope.passw.pass1 !== $scope.passw.pass2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
}; 
$scope.test1 = function(obj) {

	if(obj[0]>='0'&&obj[0]<='9'
	 &&obj[1]>='0'&&obj[1]<='9'
	 &&obj[2]>='0'&&obj[2]<='9'
	 &&obj[3]=='-'
	 &&obj[4]>='0'&&obj[4]<='9'
	 &&obj[5]>='0'&&obj[5]<='9'
	 &&obj[6]>='0'&&obj[6]<='9'
	 &&obj[7]=='-'
	 &&obj[8]>='0'&&obj[8]<='9'
	 &&obj[9]>='0'&&obj[9]<='9'
	 &&obj[10]>='0'&&obj[10]<='9'
	 &&obj[11]>='0'&&obj[11]<='9'
	 &&obj.length == 12
	 ){
		$scope.incomplete = false;
		} else {
		$scope.incomplete = true;
	    }
	}; 
}

function MyController3($scope,$routeParams,service,$http) {
	$scope.param = $routeParams.param;
	$scope.saveChanges = function(id) {
		//alert("Item changed id" );
		$scope.users[id-1].fName=$scope.fName;
		$scope.users[id-1].lName=$scope.lName;
		$scope.users[id-1].sex = $scope.sex;
		$scope.users[id-1].title = $scope.title;  
		$scope.users[id-1].office = $scope.office; 
		$scope.users[id-1].cell = $scope.cell; 
		$scope.users[id-1].SMS = $scope.SMS; 
		$scope.users[id-1].imageUrl = $scope.imageUrl;
		$scope.users[id-1].email = $scope.email; 

	};	
	
	$scope.$watch('passw.pass1',function() {$scope.test();});
	$scope.$watch('passw.pass2',function() {$scope.test();});
     $scope.$watch('office',function() {$scope.test1($scope.office);});
 $scope.$watch('cell',function() {$scope.test1($scope.cell);});
$scope.$watch('SMS',function() {$scope.test1($scope.SMS);});

$scope.test = function() {
  if ($scope.passw.pass1 !== $scope.passw.pass2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
}; 
$scope.test1 = function(obj) {

	if(obj[0]>='0'&&obj[0]<='9'
	 &&obj[1]>='0'&&obj[1]<='9'
	 &&obj[2]>='0'&&obj[2]<='9'
	 &&obj[3]=='-'
	 &&obj[4]>='0'&&obj[4]<='9'
	 &&obj[5]>='0'&&obj[5]<='9'
	 &&obj[6]>='0'&&obj[6]<='9'
	 &&obj[7]=='-'
	 &&obj[8]>='0'&&obj[8]<='9'
	 &&obj[9]>='0'&&obj[9]<='9'
	 &&obj[10]>='0'&&obj[10]<='9'
	 &&obj[11]>='0'&&obj[11]<='9'
	 &&obj.length == 12
	 ){
		$scope.incomplete = false;
		} else {
		$scope.incomplete = true;
	    }
	}; 
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.config(['$routeProvider',  
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'route1.html',
                    controller: 'RouteController'
                }).
				when('/createnew/:param', {
                    templateUrl: 'createnew.html',
                    controller: 'MyController2'
                }).
                when('/route2/:param', {
                    templateUrl: 'route2.html',
                    controller: 'RouteController'
                }).
				when('/edit_user/:param', {
                    templateUrl: 'edit_user.html',
                    controller: 'MyController3'
                }).
				when('/route21/:param', {
                    templateUrl: 'route21.html',
                    controller: 'RouteController'
                }).
				when('/route22/:param', {
                    templateUrl: 'route22.html',
                    controller: 'RouteController'
                }).
                otherwise({
                    redirectTo: '/'				
                });
        }]);

myApp.controller("RouteController", function($scope, $routeParams,service,$http) {
		$scope.param = $routeParams.param;
    });
myApp.controller('MyController', MyController);
myApp.controller('MyController2', MyController2);
myApp.controller('MyController3', MyController3);
myApp.controller('OtherController', OtherController);
