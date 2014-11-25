'use strict';

angular.module('myApp', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/superheros', {
			templateUrl: 'views/superhero.html',
			controller: 'MainCtrl'
		});
	});