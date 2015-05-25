var app = angular.module('youtubeInstant', ['ngRoute']);

app.config(function($routeProvider) {
	
	$routeProvider
		.when('/search', {
			controller: 'SearchVideo',
			templateUrl: 'app/partials/search.html'
		})

		.otherwise({ redirectTo: '/search' });
});