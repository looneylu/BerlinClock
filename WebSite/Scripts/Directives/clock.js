myAngularBerlinClockApp.directive("clock", function(){
    return{
        restrict: 'E',
        scope: true,
        controller: function($scope){
        //    console.log("Directive fired");
        },
        templateUrl: "../Scripts/Directives/clock.html"
    }
});