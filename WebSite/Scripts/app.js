var myAngularBerlinClockApp = new angular.module("BerlinClockApp", []);

myAngularBerlinClockApp.controller('SecondsController', ['$scope', function($scope){
	$scope.on = false;
}])