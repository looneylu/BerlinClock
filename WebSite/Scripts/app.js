
var myAngularBerlinClockApp = new angular.module("BerlinClockApp", []);

myAngularBerlinClockApp.controller('SecondsController', ['$scope', '$interval', function($scope, $interval){

	$interval(function(){
		secondsOn = secondsTime(new Date());
		$scope.on = secondsOn;
		}, 1000
	);
}])