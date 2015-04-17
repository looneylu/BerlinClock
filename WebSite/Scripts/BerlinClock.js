var secondsTime = function(date){
	var onOrOff = false;
	if (date.getSeconds() % 2 == 0)
		onOrOff = true;
	return onOrOff;
}

var singleMinutesTime = function(date){
	var minutes = date.getMinutes();
	var numberOfSingleMinutes = minutes % 5;

	return turnOnLamps(numberOfSingleMinutes, function(){ return 'Y'; });
}

var fifthMinutesTime = function(date){
	var minutes = date.getMinutes();
	var numberOfFives = minutes / 5;

	return turnOnLamps(numberOfFives, function(currentElement){
			return (currentElement % 3 == 0) ? 'R' : 'Y';
	}, "OOOOOOOOOOO")
}

var singleHoursTime = function(date){
	var hours = date.getHours();
	var numberOfSingleHours = hours % 5;  

	return turnOnLamps(numberOfSingleHours, function(){ return 'R'; });

}

var fifthHoursTime = function(date){
	var fifthHours = date.getHours();
	var numberOfFifthHours = fifthHours / 5;

	return turnOnLamps(numberOfFifthHours, function(){ return 'R'; });
}

var turnOnLamps = function(number, characterToUse, template){
	return (template || "OOOO").split('').map(function(x, i){
		if (i + 1 <= number){
			return characterToUse(i+1);
		} else
			return 'O';
	});
}
