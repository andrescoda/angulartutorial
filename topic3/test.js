'use strict';

angular.module('myApp')
	.controller('MainCtrl', function MainCtrl($scope){
		$scope.name = "Andres";
		$scope.lastname = "Coda"
		$scope.gender = "M";
		$scope.age = "30 years";
		$scope.superpower = "Bionic audition";
	});