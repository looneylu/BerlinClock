
var myAngularBerlinClockApp = new angular.module("BerlinClockApp", []);

myAngularBerlinClockApp.controller('timeController', ['$scope', '$interval', function($scope, $interval){

	$interval(function(){
		time = new Date();
		$scope.secondsLamp = secondsTime(time);
		$scope.fiveHourLamps = fifthHoursTime(time).split(""); 
		$scope.singleHourLamps = singleHoursTime(time).split("");
		$scope.fiveMinuteLamps = fifthMinutesTime(time).split("");
		$scope.minuteLamps = singleMinutesTime(time).split("");
		$scope.timeString = time; 
		}, 1000
	);
}])





