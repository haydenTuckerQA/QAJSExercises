"use strict"; 

function getRekt(str, height, width) {
	removeResult();
	
	var cont = document.createElement('div');
	cont.id = "result";
	var p = document.createElement('p');
	
	var row_forward_string = generateString(str, width);
	var row_reverse_string = generateString(reverseString(str), width);
	
	var column_forward_string = generateString(str, height);
	var column_reverse_string = generateString(reverseString(str), height);
	
	//console.log("Row: " + row_forward_string);
	//console.log("Col: " + column_forward_string);
	
	var word_rekt;
	
	if (width%2 == 0) {
		//even width square starts string backwards
		word_rekt = generateWordSquare(row_reverse_string, row_forward_string, column_reverse_string, column_forward_string, height, width, str.length);
	} else {
		//odd width square starts string forwards
		word_rekt = generateWordSquare(row_forward_string, row_reverse_string, column_forward_string, column_reverse_string, height, width, str.length);
	}
	
	//console.log(word_rekt.toString());
	p.setAttribute('style', 'white-space: pre; font-family: courier;');
	p.textContent = wordRektToString(word_rekt);
	cont.appendChild(p)
	
	document.getElementsByTagName('body')[0].appendChild(cont);
}

function wordRektToString(rekt) {
	//console.log(rekt.toString());
	/*var rekt = [["R", "E", "K", "T"],
				["E", null, null, "K"],
				["K", null, null, "E"],
				["T", "K", "E", "R"]];*/
	var str = "";
	for (let x = 0; x < rekt.length; x++) {
		for (let y = 0; y < rekt[0].length; y++) {
			if (rekt[x][y] != "") {
				str += rekt[x][y];
			} else {
				str += " ";
			}
			
		}
		str += "\r\n";
	}
	
	return str;
	/*REKT
	  E  K
	  K  E
	  TREK*/
}

function generateWordSquare(even_row_string, odd_row_string, even_col_string, odd_col_string, height, width, str_length) {
	var new_rekt = insertRows(even_col_string.length, even_row_string, odd_row_string, str_length);
	new_rekt = insertCols(new_rekt, even_col_string, odd_col_string, str_length, even_row_string.length);
	return new_rekt;
}

function insertRows(no_rows, even_row_string, odd_row_string, str_length) {
	var new_rekt = [];
	var row = 0;
	var split_even_row = even_row_string.split("");
	var split_odd_row = odd_row_string.split("");
	var even = true;
	
	for (let x = 0; x <= no_rows; x++) {
		if (even && x == row) {
			new_rekt[x] = split_even_row;
			row += (str_length - 1);
			even = false;
		} else if (!even && x == row) {
			new_rekt[x] = split_odd_row;
			row += (str_length - 1);
			even = true;
		} else {
			new_rekt[x] =  Array(even_row_string.length).join(".").split(".");
		}
	}
	
	console.log(new_rekt.toString());
	
	return new_rekt;
}

function insertCols(new_rekt, even_col_string, odd_col_string, str_length, row_length) {
	var col = 0;
	var even = true;
	
	while (col < row_length) {
		for (let x = 0; x < new_rekt.length; x++) {
			if (even) {
				new_rekt[x][col] = even_col_string.charAt(x);
			} else {
				new_rekt[x][col] = odd_col_string.charAt(x);
			}
		}
		col += (str_length - 1);
		even = !even;
	}
	
	return new_rekt;
}

function generateString (str, num) {
	var count = num;
	var str_pos = 0;
	var res_str = "";
	var fwBw = true;
	
	while (count > 0) {
		res_str += str.charAt(str_pos);
		
		if (fwBw && str_pos == str.length - 1) {
			fwBw = false;
			count--;
		} else if (!fwBw && str_pos <= 0) {
			fwBw = true;
			count--;
		}
		
		if (fwBw) {
			str_pos++;
		} else {
			str_pos--;
		}
	}
	
	return res_str;
}

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    return reverseArray.join("");
}

function removeResult () {
	if (document.getElementById('result') != null) {
		document.getElementById('result').remove();
	}
}

window.onload = function() {
	document.getElementById('get_rekt').onclick = function () {
		var input_string = document.getElementById('input_string').value;
		var input_height = document.getElementById('input_height').value;
		var input_width = document.getElementById('input_width').value;
		if (input_string == "") {
			alert("You didn't enter a string!");
		} else if (input_height <= 0 || input_width <= 0) {
			alert("You didn't enter numbers higher than 0!");
		}else {
			getRekt(input_string, input_height, input_width);
		}
	};
}