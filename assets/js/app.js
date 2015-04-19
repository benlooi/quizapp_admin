angular.module('quizapp',['controllers','ui.router','ui.bootstrap'])

.config(function($stateProvider,$urlRouterProvider) {
	$stateProvider
	.state('welcome',{
		url: "/welcome",
		templateUrl:'templates/welcome.html',
		controller:'welcomeCtrl'
		})
	.state('sgquiz',{
		url: "/sgquiz",
		abstract:true,
		
		templateUrl:'templates/main.html',
		controller:'sgquizCtrl'
			
		
	})
.state('sgquiz.user',{
		url: "/user",
		templateUrl:"templates/quiz_maker.html",
		controller:'quizmakerCtrl'
		
		})

	;

	
	$urlRouterProvider.otherwise('/welcome');
})