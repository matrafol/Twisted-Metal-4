{
var characters = {
	name: "Orbital",
	character_info: "images/Characters/orbital/orbital.jpg",
	vehicle: "images/Characters/orbital/orbital-vehicle.png"
}
/*var characters = [
	"Orbital",
	"images/Characters/orbital/orbital.jpg",
	"images/Characters/orbital/orbital-vehicle.png"
]*/

document.write(characters.name);

for(test = 0; test < characters.length; test++){
	document.write(characters.name);
	//document.write(key[test], characters[test]);
	//document.getElementBy("demo").innerHTML = "Paragraph changed.";
}

}

/*for(test = 0; test < characters.length; test++){
	document.write(characters[test]);
	//document.getElementBy("demo").innerHTML = "Paragraph changed.";
}*/


