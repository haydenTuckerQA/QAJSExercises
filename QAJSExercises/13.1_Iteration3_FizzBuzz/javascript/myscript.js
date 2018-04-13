window.onload = function() {
	document.getElementById("submit").onclick = function() {
		var num = document.getElementById("input_number").value;
		var fizz = document.getElementById("input_fizz").value;
		var buzz = document.getElementById("input_buzz").value;
		
		for(var i = 1; i <= num; i++) {
			document.write(i);
			if(i%3==0) {
				document.write(" " + fizz);
			}
			
			if(i%5==0) {
				document.write(" " + buzz);
			}

			document.write("<br>");
		}
	}
}

