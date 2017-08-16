angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	$scope.tagline = 'Nothing beats a pocket protector!';

	$http.get("/nerds").then(function (response) {
		$scope.nerds = response.data;
	});

});