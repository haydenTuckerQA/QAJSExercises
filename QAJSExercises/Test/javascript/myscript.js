var oldObject = {
	test: 1
};

document.write("------Creating Assigned Objects------");
document.write("<br>Old object: " + oldObject.test);

var newVarObject = oldObject;
document.write("<br>Newly Assigned object: " + newVarObject.test);

document.write("<br><br>------Testing Updated Assigned Objects------");
newVarObject.test = 9;

document.write("<br>Unchanged Old object: " + oldObject.test);
document.write("<br>Updated Assigned object: " + newVarObject.test);




var oldObject = {
	test: 1
};

document.write("<br><br><br>------Creating Created Objects------");
document.write("<br>Old object: " + oldObject.test);

var newObject = Object.create(oldObject);
document.write("<br>Newly Created object: " + newObject.test);

document.write("<br><br>------Testing Updated Created Objects------");
newObject.test = 9;

document.write("<br>Unchanged Old object: " + oldObject.test);
document.write("<br>Updated Created object: " + newObject.test);





document.write("<br><br><br><br><br>Backticks: " + `${newObject.test}`);
document.write("<br>Double Quotes: " + "${newObject.test}");
document.write("<br>Single Quotes: " + '${newObject.test}');
