'use strict';

angular.module('myApp', [])
			.controller('MainController',
				function MainController($scope){
					$scope.name = "Andres";
					$scope.lastname = "Coda";
					$scope.gender = "M";
					$scope.age = "30 years";
					$scope.superpower = "Bionic audition";
	});

	