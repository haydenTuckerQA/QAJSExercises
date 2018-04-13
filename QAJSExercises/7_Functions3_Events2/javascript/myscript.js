window.onload = function() {
	document.getElementById("submit").onclick = function() {
		var input_name = document.getElementById("input_name").value;
		var input_age = document.getElementById("input_age").value;
		var input_occupation = document.getElementById("input_occupation").value;
		
		var person = {
			name: input_name,
			age: input_age,
			occupation: input_occupation
		}
		
		document.getElementById("name").innerHTML = "Name: " + person.name;
		document.getElementById("age").innerHTML = "Age: " + person.age;
		document.getElementById("occupation").innerHTML = "Occupation: " + person.occupation;
	};
}