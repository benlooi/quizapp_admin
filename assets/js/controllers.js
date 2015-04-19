angular.module('controllers',[])

.filter("reverse", function(){
    return function(items){
        return items.slice().reverse(); // Create a copy of the array and reverse the order of the items
    };
})
.controller('welcomeCtrl', function ($scope, $http,$state){

	$scope.loginError=false;

	
	$scope.signup=false;
	
$scope.doSignUp = function() {
	$scope.signup=!$scope.signup;
}

$scope.login = function () {
	
	logininfo=[$scope.username,$scope.password];
	console.log(logininfo);
	$state.go('sgquiz.user');



}


})


.controller('sgquizCtrl', function ($scope, $http){
	
})
.controller('quizmakerCtrl', function ($scope, $http,$state){
	$scope.quiz=[];
	$scope.no_choice=1;

	$scope.addChoice = function (number) {
		$scope.no_choice=parseInt(number);
	}
	
	$scope.addQn= function () {
		var selection={};
		selection.qn=$scope.newqn.qn;
		selection.choices=$scope.newqn.choices;
		

		$scope.quiz.push(selection);
		$scope.newqn={};
	}

	$scope.setAnswer = function (index, choice) {


		$scope.quiz[index].ans=choice;
	}
	$scope.removeAns = function (Pindex) {
		

		$scope.quiz.splice(Pindex,1);
	}
})
