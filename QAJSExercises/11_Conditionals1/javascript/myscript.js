function checkAge (person) {
	if (person.age >= 20 && person.age <= 40) {
		document.writeln(person.name + " is between 20 and 40 years of age!");
	} else {
		document.writeln(person.name + " is not between 20 and 40 years of age!");
	}
}

var hayden = {
	name: "Hayden",
	age: 25,
	occupation: "Trainee"
}

var oldie = {
	name: "Oldie",
	age: 50,
	occupation: "Old"
}

checkAge(hayden);
checkAge(oldie);