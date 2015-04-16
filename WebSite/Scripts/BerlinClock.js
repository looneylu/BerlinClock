var secondsTime = function(date){
	var onOrOff = false;
	if (date.getSeconds() % 2 == 0)
		onOrOff = true;
	return onOrOff;
}

var singleMinutesTime = function(date){
	var minutesString = "OOOO";
	if (date.getMinutes() % 5 == 1)
		return "YOOO";
	else if(date.getMinutes() % 5 == 2)
		return "YYOO";
	else if(date.getMinutes() % 5 == 3)
		return "YYYO";
	else if (date.getMinutes() % 5 == 4)
		return "YYYY";
	else 
		return minutesString;
}

var fifthMinutesTime = function(date){
	var fifthMinutesString = "OOOOOOOOOOO";
	if (date.getMinutes() / 5 == 1)
		return "YOOOOOOOOOO";
	else if (date.getMinutes() / 5 == 2)
		return "YYOOOOOOOOO";
	else if (date.getMinutes() / 5 == 3)
		return "YYROOOOOOOO";
	else if (date.getMinutes() / 5 == 4)
		return "YYRYOOOOOOO";
	else if (date.getMinutes() / 5 == 5)
		return "YYRYYOOOOOO";
	else if (date.getMinutes() / 5 == 6)
		return "YYRYYROOOOO";
	else if (date.getMinutes() / 5 == 7)
		return "YYRYYRYOOOO";
	else if (date.getMinutes() / 5 == 8)
		return "YYRYYRYYOOO";
	else if (date.getMinutes() / 5 == 9)
		return "YYRYYRYYROO";
	else if (date.getMinutes() / 5 == 10)
		return "YYRYYRYYRYO";
	else if (date.getMinutes() / 5 == 11)
		return "YYRYYRYYRYY";
	else
		return fifthMinutesString;
}

var singleHoursTime = function(date){
	var singleHoursString = "OOOO";
	if (date.getHours() % 5 == 1)
		return "ROOO";
	else if (date.getHours() % 5 == 2)
		return "RROO";
	else if (date.getHours() % 5 == 3)
		return "RRRO";
	else if (date.getHours() % 5 == 4)
		return "RRRR";
	else
		return singleHoursString;
}

var fifthHoursTime = function(date){
	var fifthHoursString = "OOOO";
	if (date.getHours() / 5 == 1)
		return "ROOO";
	else if (date.getHours() / 5 == 2)
		return "RROO";
	else if (date.getHours() / 5 == 3)
		return "RRRO";
	else if (date.getHours() / 5 == 4)
		return "RRRR"; 
	else
		return fifthHoursString; 
}