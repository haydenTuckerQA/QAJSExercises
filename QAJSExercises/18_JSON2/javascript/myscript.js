function searchByName(kings, kings_name) {
	removeResult();
	var cont = document.createElement('div');
	cont.id = "result";
	var h1 = document.createElement('h1');
	h1.textContent = kings_name;
	
	kings.forEach(function(king) {
		
		if (kings_name == king.nm) {
			var div = document.createElement('div');
			var data = document.createElement('h2');
			data.textContent = "City: " + king.cty;
			div.appendChild(data);
			
			var data = document.createElement('h2');
			data.textContent = "House: " + king.hse;
			div.appendChild(data);
			
			var data = document.createElement('h2');
			data.textContent = "Years: " + king.yrs;
			div.appendChild(data);
			
			cont.appendChild(div);
		}
	});
	
	if (cont.childElementCount == 0) {
		var data = document.createElement('h1');
		data.textContent = "There were no results";
		cont.appendChild(data);
	} else {
		cont.prepend(h1);
	}
	document.getElementsByTagName('body')[0].appendChild(cont);
}

function searchByCity(kings, kings_city) {
	removeResult();
	var cont = document.createElement('div');
	cont.id = "result";
	var h1 = document.createElement('h1');
	h1.textContent = kings_city;
	
	kings.forEach(function(king) {
		
		if (kings_city == king.cty) {
			var div = document.createElement('div');
			var data = document.createElement('h2');
			data.textContent = "King: " + king.nm;
			div.appendChild(data);
			
			var data = document.createElement('h2');
			data.textContent = "House: " + king.hse;
			div.appendChild(data);
			
			var data = document.createElement('h2');
			data.textContent = "Years: " + king.yrs;
			div.appendChild(data);
			
			cont.appendChild(div);
		}
	});
	
	if (cont.childElementCount == 0) {
		var data = document.createElement('h1');
		data.textContent = "There were no results";
		cont.appendChild(data);
	} else {
		cont.prepend(h1);
	}
	document.getElementsByTagName('body')[0].appendChild(cont);
}

function searchByHouse(kings, kings_house) {
	removeResult();
	removeResult();
	var cont = document.createElement('div');
	cont.id = "result";
	var h1 = document.createElement('h1');
	h1.textContent = kings_house;
	
	kings.forEach(function(king) {
		
		if (kings_house == king.hse) {
			var div = document.createElement('div');
			var data = document.createElement('h2');
			data.textContent = "King: " + king.nm;
			div.appendChild(data);
			
			var data = document.createElement('h2');
			data.textContent = "City: " + king.cty;
			div.appendChild(data);
			
			var data = document.createElement('h2');
			data.textContent = "Years: " + king.yrs;
			div.appendChild(data);
			
			cont.appendChild(div);
		}
	});
	
	if (cont.childElementCount == 0) {
		var data = document.createElement('h1');
		data.textContent = "There were no results";
		cont.appendChild(data);
	} else {
		cont.prepend(h1);
	}
	document.getElementsByTagName('body')[0].appendChild(cont);
}

function searchByYear(kings, kings_year) {
	removeResult();
	alert("Searched by year " + kings_year);
}

function removeResult () {
	if (document.getElementById('result') != null) {
		document.getElementById('result').remove();
	}
}

window.onload = function() {
	var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json ';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		var json_kings = request.response;
		
		document.getElementById('search').onclick = function () {
			var input = document.getElementById('input_string').value;
			if (input == "") {
				alert("You didn't search anything!");
			} else {
				var radios = document.getElementsByName('search_by');

				for (var i = 0, length = radios.length; i < length; i++) {
					if (radios[i].checked) {
						// do whatever you want with the checked radio
						var val = radios[i].value;

						// only one radio can be logically checked, don't check the rest
						break;
					}
				}
				
				switch(val) {
					case "name":
						searchByName(json_kings, input);
						break;
					case "city":
						searchByCity(json_kings, input);
						break;
					case "house":
						searchByHouse(json_kings, input);
						break;
					case "year":
						searchByYear(json_kings, input);
						break;
				}
				
			}
		};
	}
}