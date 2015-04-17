
var myAngularBerlinClockApp = new angular.module("BerlinClockApp", []);

myAngularBerlinClockApp.controller('SecondsController', ['$scope', '$interval', function($scope, $interval){

	$interval(function(){
		time = new Date();
		secondsOn = secondsTime(time);
		$scope.secondsLamp = secondsOn;
		fiveHourLamps = fifthHoursTime(time);
		$scope.fiveHourLamps = fiveHourLamps;
		singleHourLamps = singleHoursTime(time);
		$scope.singleHourLamps = singleHourLamps; 
		minutesOfFiveLamps = fifthMinutesTime(time);
		$scope.fiveMinuteLamps = minutesOfFiveLamps;
		minuteLamps = singleMinutesTime(time);
		$scope.minuteLamps = minuteLamps;
		$scope.timeString = time; 
		}, 1000
	);
}])