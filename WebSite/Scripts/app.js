
var myAngularBerlinClockApp = new angular.module("BerlinClockApp", []);


myAngularBerlinClockApp.controller('timeController', ['$scope', '$interval', function($scope, $interval){

	$interval(function(){
		time = new Date();
		secondsOn = secondsTime(time);
		$scope.secondsLamp = secondsOn;
		fiveHourLamps = fifthHoursTime(time);
		$scope.fiveHourLamps = fiveHourLamps.split("");
		singleHourLamps = singleHoursTime(time);
		$scope.singleHourLamps = singleHourLamps.split(""); 
		minutesOfFiveLamps = fifthMinutesTime(time);
		$scope.fiveMinuteLamps = minutesOfFiveLamps.split("");
		minuteLamps = singleMinutesTime(time);
		$scope.minuteLamps = minuteLamps.split("");
		$scope.timeString = time; 

		updateMinutes(minuteLamps.split("")); 
		}, 1000
	);
}])





