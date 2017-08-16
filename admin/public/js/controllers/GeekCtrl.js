angular.module('GeekCtrl', []).controller('GeekController', function($scope, $http) {

	$scope.tagline = 'The square root of life is pi!';

	$http.get("/geeks").then(function (response) {
		$scope.geeks = response.data;
	});

});