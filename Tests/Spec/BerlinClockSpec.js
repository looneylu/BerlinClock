describe('Displaying seconds', function(){
	it ('Should turn on for even seconds', function(){
		var seconds = new Date(1985, 09, 07, 12, 31, 24);
		expect(secondsTime(seconds)).toBe(true);
	});
});

describe('Displaying seconds', function(){
	it ('Should turn off for odd seconds', function(){
		var seconds = new Date(1985, 09, 07, 12, 31, 23);
		expect(secondsTime(seconds)).toBe(false);
	});
});

describe('Displaying single minutes', function(){
	it ('Should turn on 1 when remainder of minutes when divided by five is 1', function(){
		var singleMinutes = new Date(1985, 09, 07, 12, 31, 24);
		expect(singleMinutesTime(singleMinutes)).toBe("YOOO");
	});
});

describe('Displaying singleMinutes', function(){
	it('Should turn on 2 when remainder of minutes when divided by 5 is 2', function(){
		var singleMinutes = new Date(1985, 09, 07,12, 32, 24);
		expect(singleMinutesTime(singleMinutes)).toBe("YYOO");
	});
});

describe('Displaying singleMinutes', function(){
	it('Should turn on 3 when remainder of minutes when divided by 5 is 3', function(){
		var singleMinutes = new Date(1985, 09, 07,12, 33, 24);
		expect(singleMinutesTime(singleMinutes)).toBe("YYYO");
	});
});

describe('Displaying singleMinutes', function(){
	it('Should turn on 4 when remainder of minutes when divided by 5 is 4', function(){
		var singleMinutes = new Date(1985, 09, 07,12, 34, 24);
		expect(singleMinutesTime(singleMinutes)).toBe("YYYY");
	});
});

describe('Displaying singleMinutes', function(){
	it('Should be off when remainder of minutes when divided by 5 is 0', function(){
		var singleMinutes = new Date(1985, 09, 07,12, 35, 24);
		expect(singleMinutesTime(singleMinutes)).toBe("OOOO");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up 1 5th minute lamp for 5th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 05, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("YOOOOOOOOOO");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up 2 5th minute lamps for 10th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 10, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("YYOOOOOOOOO");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up 3 5th minute lamps for  15th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 15, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("YYROOOOOOOO");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up 4 5th minute lamps for 20th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 20, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("YYRYOOOOOOO");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up 5 5th minute lamps for 25th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 25, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("YYRYYOOOOOO");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up 6 5th minute lamps for 30th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 30, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("YYRYYROOOOO");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up 7 5th minute lamps for 35th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 35, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("YYRYYRYOOOO");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up 8 5th minute lamps for 40th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 40, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("YYRYYRYYOOO");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up 9 5th minute lamps for 45th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 45, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("YYRYYRYYROO");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up 10 5th minute lamps for 50th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 50, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("YYRYYRYYRYO");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up corresponding 5th minute lamp for every 5th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 55, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("YYRYYRYYRYY");
	});
});

describe('Displaying fifthMinutes', function(){
	it('Should light up 0 5th minute lamps for 0th minute', function(){
		var fifthMinutes = new Date(1985, 09, 07, 12, 00, 26);
		expect(fifthMinutesTime(fifthMinutes)).toBe("OOOOOOOOOOO");
	});
});

describe('Displaying singleHours', function(){
	it('Should turn on 1 when remainder of hours when divided by 5 is 1', function(){
		var singleHours = new Date(1985, 09, 07, 01, 12, 26);
		expect(singleHoursTime(singleHours)).toBe("ROOO");
	})
});

describe('Displaying singleHours', function(){
	it('Should turn on 2 when remainder of hours when divided by 5 is 2', function(){
		var singleHours = new Date(1985, 09, 07, 07, 12, 26);
		expect(singleHoursTime(singleHours)).toBe("RROO");
	})
});

describe('Displaying singleHours', function(){
	it('Should turn on 3 when remainder of hours when divided by 5 is 3', function(){
		var singleHours = new Date(1985, 09, 07, 13, 12, 26);
		expect(singleHoursTime(singleHours)).toBe("RRRO");
	})
});

describe('Displaying singleHours', function(){
	it('Should turn on 4 when remainder of hours when divided by 5 is 4', function(){
		var singleHours = new Date(1985, 09, 07, 19, 12, 26);
		expect(singleHoursTime(singleHours)).toBe("RRRR");
	})
});

describe('Displaying fifthHours', function(){
	it('Should turn on 1 5th hour lamp for 5th hour',  function(){
		var fifthHours = new Date(1985, 09, 07, 05, 12, 26);
		expect(fifthHoursTime(fifthHours)).toBe("ROOO");
	})
});

describe('Displaying fifthHours', function(){
	it('Should turn on 2 5th hour lamps for 10th hour',  function(){
		var fifthHours = new Date(1985, 09, 07, 10, 12, 26);
		expect(fifthHoursTime(fifthHours)).toBe("RROO");
	})
});

describe('Displaying fifthHours', function(){
	it('Should turn on 3 5th hour lamps for 15th hour',  function(){
		var fifthHours = new Date(1985, 09, 07, 15, 12, 26);
		expect(fifthHoursTime(fifthHours)).toBe("RRRO");
	})
});

describe('Displaying fifthHours', function(){
	it('Should turn on 4 5th hour lamps for 20th hour',  function(){
		var fifthHours = new Date(1985, 09, 07, 20, 12, 26);
		expect(fifthHoursTime(fifthHours)).toBe("RRRR");
	})
});