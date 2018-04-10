var person = {
	name: "Hayden",
	age: 25,
	occupation: "Trainee"
}

document.getElementById("testClick").onclick = function() {myFunction()};

function myFunction() {
    person.age = person.age + 1;
	document.writeln("Name: " + person.name + " Age: " + person.age + " Occupation: " + person.occupation);
}

document.write("Name: " + person.name + " Age: " + person.age + " Occupation: " + person.occupation);