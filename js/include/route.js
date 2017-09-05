var module = angular.module("lkticket.admin");

module.config([ '$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
} ]);

module.config([ "$routeProvider", function($routeProvider) {
	console.log("Route: " + $routeProvider);
	$routeProvider.when("/:id?", {
		templateUrl : "/pages/start/start.html",
		controller: "StartCtrl"
	});
	$routeProvider.when("/shows", {
		templateUrl : "/pages/shows/shows.html",
		controller : "ShowsCtrl"
	});
	$routeProvider.when("/shows/:id", {
		templateUrl : "/pages/shows/show.html",
		controller : "ShowCtrl"
	});
	$routeProvider.when("/users", {
		templateUrl : "/pages/users/users.html",
		controller : "UsersCtrl"
	});
	$routeProvider.when("/users/:id", {
		templateUrl : "/pages/users/user.html",
		controller : "UserCtrl"
	});
	$routeProvider.otherwise({
		redirectTo : "/"
	});
} ]);
