var floatAge, floatDays, floatMonths, intWeeks, intFortnights;

floatAge = parseFloat(prompt("Enter age in years"));


floatDays = parseFloat(floatAge*365.25).toFixed(2);
floatMonths = parseFloat(floatAge*12).toFixed(2);
intWeeks = parseFloat(floatDays/7).toFixed(2);
intFortnights = parseFloat(floatDays/14).toFixed(2);

alert("You are currently = " + floatAge + "years old");
alert("You are currently = " + floatDays + "days old");
alert("You are currently = " + floatMonths + "months old");
alert("You are currently = " + intWeeks + "weeks old");
alert("You are currently = " + intFortnights + "fortnights old");
