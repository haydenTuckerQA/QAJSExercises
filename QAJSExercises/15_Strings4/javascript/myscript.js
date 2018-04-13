function check (str) {
	var triples = 0;
	for (var i = 0; i < str.length; i++) {
		var curChar = str.charAt(i);
		var n = i + 1;
		var m = i + 2;
		
		if (n < str.length && curChar == str.charAt(n)) {
			if (m < str.length && curChar == str.charAt(m)) {
				triples++;
			}
		}
		
	}
	
	alert("There are " + triples + " triples in this string!");
}

window.onload = function() {
	document.getElementById("submit").onclick = function() {
		var string = document.getElementById("input_string").value;
		
		check(string);
	}
}

