for(var i = 1; i <= 100; i++) {
	document.write(i);
	if(i%3==0) {
		document.write(" Fizz");
	}
	
	if(i%5==0) {
		document.write(" Buzz!");
	}

	document.write("<br>");
}