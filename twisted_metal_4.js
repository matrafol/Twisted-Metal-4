/* 
	Try to do
	'names': ["Calypso", "Drag queen", "Sweet tooth"],
	'type_of_car' : []
	'driver_deamanor' : []
	'special_weapon_info' : []
	'special_weapon_gif' : []
	'vehicle_image' : []
	'vehicle_gif' : []
	'character_ending' : []
	'handling' : []
	'armor' : []
	'special_weapon_stats' : []
	'speed' : []
*/

function getData() {
	var characters = {
		'orbital' : 
		{
			name: "Orbital",
			character_info: "images/Characters/orbital/orbital.jpg",
			vehicle: "images/Characters/orbital/orbital-vehicle.png"
		},
		'mr_zombie' : 
		{
			name: "Mr. Zombie",
			character_info: document.createElement('img'),
			vehicle: "images/Characters/orbital/orbital-vehicle.png"
		},
		'quatro' : 
		{
			name: "Quatro",
			character_info: "images/Characters/orbital/orbital.jpg",
			vehicle: "images/Characters/orbital/orbital-vehicle.png"
		}
	}

	var test = [
		["shiet", "asd"],
		["asd", "shiet2"],
		["asd2", "shiet3"]
	]

	console.log(test[0][1]);
	/*var sortCharacters = characters.sort(function(a,b){return a - b});
	console.log(sortCharacters);

	console.log(characters);*/

	//keysSorted = Object.keys(characters).sort(function(a,b){return characters[a]-characters[b]})
	//console.log(keysSorted);

	for (var i = 0; i <= characters.length ; i++) {
		document.getElementsByClassName("character_name")[0].innerHTML = characters[i]['name'];
		
	}
	//document.getElementsByClassName("character_info")[0].innerHTML = characters.mr_zombie.character_info;
	//console.log(characters[i]['name']);
	

}


window.onload = getData();

/*document.getElementById("search").addEventListener("click", function(){
  document.getElementById("character_name").innerHTML = characters.character1.name;
});*/

//document.getElementById("character_name").innerHTML = characters.character1.name;

//document.write(characters.character1.name);
//document.write(characters.character2.name);

/*for(test = 0; test < characters.length; test++){
	document.write(characters);
	//document.write(key[test], characters[test]);
	//document.getElementBy("demo").innerHTML = "Paragraph changed.";
}*/

