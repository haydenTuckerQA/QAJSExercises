function game (n) {
	if (n == 1) {
		document.write("Complete!");
	} else if ((n%3)==0) {
		var div_num = n--/3;
		document.write(div_num + "<br>");
		game(div_num);
	} else {
		var min_num = (n-1);
		document.write(min_num + "<br>");
		game(min_num);
	}
}

window.onload = function() {
	document.getElementById("submit").onclick = function() {
		var num = document.getElementById("input_number").value;
		
		game(num);
	}
}

