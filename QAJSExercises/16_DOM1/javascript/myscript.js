function createParagraphTag () {
	deleteParagraphTag();
	
	var myP = document.createElement('p');
	myP.id = "uniquep";
	myP.textContent = "I am the new p tag!";
	document.getElementsByTagName('body')[0].appendChild(myP);
}

function deleteParagraphTag () {
	if (document.getElementById('uniquep') != null) {
		document.getElementById('uniquep').remove();
	}
}
function editParagraphTag () {
	var input_string = document.getElementById('input_string').value;
	
	if (document.getElementById('uniquep') != null) {
		document.getElementById('uniquep').innerHTML = input_string;
	} else {
		alert("You haven't created a p tag yet!");
	}
}

window.onload = function() {
	document.getElementById("create").onclick = function() {
		createParagraphTag();
	}
	
	document.getElementById("delete").onclick = function() {
		deleteParagraphTag();
	}
	
	document.getElementById("edit").onclick = function() {
		editParagraphTag();
	}
}

