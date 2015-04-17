
var myAngularBerlinClockApp = new angular.module("BerlinClockApp", []);

myAngularBerlinClockApp.controller('timeController', ['$scope', '$interval', function($scope, $interval){

	$interval(function(){
		time = new Date();
		$scope.secondsLamp = secondsTime(time);
		$scope.fiveHourLamps = fifthHoursTime(time); 
		$scope.singleHourLamps = singleHoursTime(time);
		$scope.fiveMinuteLamps = fifthMinutesTime(time);
		$scope.minuteLamps = singleMinutesTime(time);
		$scope.timeString = time; 
		}, 1000
	);
}])





