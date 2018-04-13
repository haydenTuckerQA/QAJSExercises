var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
	var superHeroes = request.response;
	
	var squad_name = document.createElement('h1');
	squad_name.textContent = "Squad Name: " + superHeroes.squadName;
	document.getElementsByTagName('body')[0].appendChild(squad_name);
	
	var hometown = document.createElement('h2');
	hometown.textContent = "Home Town: " + superHeroes.homeTown;
	document.getElementsByTagName('body')[0].appendChild(hometown);
	
	var formed = document.createElement('h2');
	formed.textContent = "Formed: " + superHeroes.formed;
	document.getElementsByTagName('body')[0].appendChild(formed);
	
	var secret_base = document.createElement('h3');
	secret_base.textContent = "Secret Base: " + superHeroes.secretBase;
	document.getElementsByTagName('body')[0].appendChild(secret_base);
	
	var active = document.createElement('h3');
	active.textContent = "Active: " + superHeroes.active;
	document.getElementsByTagName('body')[0].appendChild(active);
	
	var members = superHeroes.members;
	
	if (members.length == 0) {
		var memberHeading = document.createElement('h3');
		memberHeading.textContent = "No Members";
		document.getElementsByTagName('body')[0].appendChild(memberHeading);
	} else {
		var memberHeading = document.createElement('h3');
		memberHeading.textContent = "Members; ";
		document.getElementsByTagName('body')[0].appendChild(memberHeading);
		
		var tbl = document.createElement('table');
		var tbdy = document.createElement('tbody');
		
		var tr = document.createElement('tr');
		
		var th = document.createElement('th');
		th.innerHTML = "Name";
		tr.appendChild(th);
		
		var th = document.createElement('th');
		th.innerHTML = "Age";
		tr.appendChild(th);
		
		var th = document.createElement('th');
		th.innerHTML = "Secret Identity";
		tr.appendChild(th);
		
		var th = document.createElement('th');
		th.innerHTML = "Powers";
		tr.appendChild(th);
		
		tbdy.appendChild(tr);
		
		members.forEach(function(entry) {
			var tr = document.createElement('tr');
		
			var td = document.createElement('td');
			td.innerHTML = entry.name;
			tr.appendChild(td);
			
			var td = document.createElement('td');
			td.innerHTML = entry.age;
			tr.appendChild(td);
			
			var td = document.createElement('td');
			td.innerHTML = entry.secretIdentity;
			tr.appendChild(td);
			
			var td = document.createElement('td');
			td.innerHTML = entry.powers;
			tr.appendChild(td);
			
			tbdy.appendChild(tr);
		}); 
		
		
		
		tbl.appendChild(tbdy);
		document.getElementsByTagName('body')[0].appendChild(tbl);
	}
}

