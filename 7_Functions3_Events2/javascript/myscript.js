function createPerson (inputName, inputAge, inputOccupation) {
	var person = {
		name: inputName,
		age: inputAge,
		occupation: inputOccupation
	}
	
	alert("Name: " + person.name + " Age: " + person.age + " Occupation: " + person.occupation);
}


document.getElementById("personForm").addEventListener("submit", createPerson(document.getElementById("name").value), document.getElementById("age").value, document.getElementById("occupation").value);
