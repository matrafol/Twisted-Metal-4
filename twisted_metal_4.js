const characters = [
	{
		index: 0,
		player_type: "Contestant",
		name: "Calypso",
		type_of_car: "Nuke Mobile",
		vehicle_image: '<img src="images/characters/calypso/calypso-vehicle.png">',
		driver_deamanor: "Evil",
		special_weapon_desc: 
			"Calypso employs powerful nuclear missles which must be detonated near his opponents",
		handling: 1,
		armor: 4,
		special_weapon_stats: 4,
		speed: 1,
		ending_video: '<iframe src="https://www.youtube.com/embed/JhjCPxbezxE" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif : '<iframe src="https://giphy.com/embed/65HTa72NRQ1WEc0Jh0" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		//special_weapon_gif: '<iframe src="https://media.giphy.com/media/PQwm3MI7UqrxypReDy/giphy.gif" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
	},
	{
		index: 1,
		player_type: "Contestant",
		name: "Captain Grimm",
		type_of_car: "Pirate ship car",
		vehicle_image: '<img src="images/characters/captain-grimm/captain-grimm-vehicle.png">',
		driver_deamanor: "Evil",
		special_weapon_desc: 
			"Captain Grimm shoots a fiery cannon ball that sets fire to and damages heavily any opponent",
		handling: 5,
		armor: 1,
		special_weapon_stats: 3,
		speed: 4,
		ending_video: '<iframe src="https://www.youtube.com/embed/rR3uSkcBWz8" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/B1pIKKLYY2noZJKURp" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
	}, 
	{
		index: 2,
		player_type: "Contestant",
		name: "Drag Queen",
		type_of_car: "Hot Rodder",
		vehicle_image: '<img src="images/characters/drag-queen/drag-queen-vehicle.png">',
		driver_deamanor: "Twisted",
		special_weapon_desc: 
			"Drag Queen's flame thrower projects forward from the car's grille and sets opponents on fire",
		handling: 1,
		armor: 2,
		special_weapon_stats: 3,
		speed: 4, 
		ending_video: '<iframe src="https://www.youtube.com/embed/7ACQyrZJ4zM" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/uBmCGBxTxQE3uTkbJx" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
	},
	{
		index: 3,
		player_type: "Boss",
		name: "Crusher",
		vehicle_image: '<img src="images/characters/bosses/crusher-vehicle.png">',
		vehicle_gif: '<iframe src="https://giphy.com/embed/LXBQotN1QfhLJFwRK2" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
	},
	/*{
		index: 4,
		player_type: "Contestant",
		name: "Orbital",
		//type_of_car: "Hot Rodder",
		vehicle_image: '<img src="images/characters/bosses/crusher-vehicle.png">',
		//driver_deamanor: "Twisted",
		//special_weapon_desc: 
			//"Drag Queen's flame thrower projects forward from the car's grille and sets opponents on fire",
		//handling: 1,
		//armor: 2,
		//special_weapon_stats: 3,
		//speed: 4, 
		//ending_video: '<iframe src="https://www.youtube.com/embed/7ACQyrZJ4zM" \
			//frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		vehicle_gif : '<iframe src="https://giphy.com/embed/3oiq2CenghshqOfaNO" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
	},*/
];



/*
pizza boy: <iframe src="https://giphy.com/embed/dZ4ewiXYDPoajYWvC6" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
warthog: <iframe src="https://giphy.com/embed/X9QDFPdNXswVDJRVdB" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
goggle eyes: <iframe src="https://giphy.com/embed/AFPKKdM4jaWOrTCA5R" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
meter maid: <iframe src="https://giphy.com/embed/2SYi7BPHV8JjCIhUsj" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
micro blast: <iframe src="https://giphy.com/embed/pP32qbexY3fxs782M4" frameBorder="0" class="giphy-embed" allowFullScreen>
trash man: <iframe src="https://giphy.com/embed/g4XnB39inFnHhHHzpR" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
mr zombie: <iframe src="https://giphy.com/embed/ZclQTWRqM8XAHdBMMQ" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
the joneses: <iframe src="https://giphy.com/embed/93lLEJph06lkr3zwVm" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
quatro: <iframe src="https://giphy.com/embed/1vZaI4C0D7W99GaCCo" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

rc car: <iframe src="https://giphy.com/embed/cXRdGz9kOd3j0uBdFJ" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
super auger: <iframe src="https://giphy.com/embed/RKKRKpRJgyo8mRMBaN" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
super slamm: <iframe src="https://giphy.com/embed/1xNTc7dVQ4kwJrWxo5" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
super thumper: <iframe src="https://giphy.com/embed/WNId4R9eYqeQYlNIE4" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
sweet tooth: <iframe src="https://giphy.com/embed/fGIh5oHyZCsq61pwAs" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
minion: <iframe src="https://giphy.com/embed/YVs5j7f3A7fT0bHo3w" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
moon buggy: <iframe src="https://giphy.com/embed/5EAtpVMxs8BjEBhDkX" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
super axel: <iframe src="https://giphy.com/embed/xAEKvOLazXtAXfUVpc" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

*/

var index = 0;
const characterLength = characters.length;
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

/*nextButton.addEventListener("click", function(){
	if(index == characterLength - 1){
		index = 0; 
		changeHtmlElement(characters[index]);
	}
	else{
		index ++;
		changeHtmlElement(characters[index]);
	}
});

previousButton.addEventListener("click", function(){
	if(index == 0){ 
		index = characterLength - 1; 
		changeHtmlElement(characters[index]);
	}
	else{
		index --;
		changeHtmlElement(characters[index]);
	}
});*/

const search = document.getElementById("search");
const autoCompleteResult = document.getElementById("auto_complete_result");
var matches = [];
var focusHighlight = 0;

search.addEventListener("keyup", function(e){
	// Removes the past auto complete result
	toggleResult("hide");

	// If there is some input at the text field
	if(this.value.length > 0){
		matches = getMatches(this.value);
		if(matches.length > 0){
			displayMatches(matches);
		}
	}

	if(autoCompleteResult.style.visiblity == "visible"){
		switch(e.key){
			case "Enter":
				search.value = document.getElementsByClassName("result_name")[focusHighlight].innerHTML;
				index = document.getElementsByClassName("result_index")[focusHighlight].value;
				changeHtmlElement(characters[index]);
				toggleResult("hide");
				focusHighlight = 0;
				e.preventDefault();
				break;
			case "ArrowUp":
				// As long as the focusHighlight isnt equal to 0, decrease index by 1 then highlight
				if(focusHighlight > 0){
					focusHighlight--;
					highlightResult(focusHighlight);
				}
				break; 
			case "ArrowDown":
				// As long as the focusHighlight isnt equal to the last matches index, increase the index then highlight
				if(focusHighlight < matches.length - 1){
					focusHighlight++;
					highlightResult(focusHighlight);
				}
				break;
		}
		// Add event listener to autocomplete result on hover and click on each target element
		autoCompleteResult.addEventListener("mouseover", function(e){
			focusHighlight = e.target.getElementsByClassName("matches_index")[0].value;
			highlightResult(focusHighlight);
			
			e.target.addEventListener("click", function(e){
				search.value = this.getElementsByClassName("result_name")[0].innerHTML;
				index = this.getElementsByClassName("result_index")[0].value;
				changeHtmlElement(characters[index]);
				toggleResult("hide");
				focusHighlight = 0;
			});
		});
	}
});

document.body.addEventListener('click', function(e){
		toggleResult("hide");
		focusHighlight = 0;
});

function changeColor(driverDemeanor, playerType){
	if(playerType.toLowerCase() == "boss") return;

	var driverDemeanorHtml = document.getElementById("driver_demeanor");
	var typeOfCarHtml = document.getElementById("type_of_car");

	if(driverDemeanor.toLowerCase() == "evil"){
		driverDemeanorHtml.style.color = "#fa033d";
		typeOfCarHtml.style.color = "#fa033d";
	} else{
		driverDemeanorHtml.style.color = "#72E900";
		typeOfCarHtml.style.color = "#72E900";
	}
}

function toggleCharacterInfoEnding(playerType){
	var characterInfo = document.getElementsByClassName("character_info")[0];
	var characterEnding = document.getElementsByClassName("character_ending")[0];

	if(playerType.toLowerCase() == "boss"){
		characterInfo.style.display = "none";
		characterEnding.style.display = "none";
	} else{
		characterInfo.style.display = "block";
		characterEnding.style.display = "block";
	}
}

function toggleResult(action){
	if(action == "hide"){
		autoCompleteResult.style.visiblity = "hidden";
		autoCompleteResult.innerHTML = '';
	} else if(action == "show"){
		autoCompleteResult.style.visiblity = "visible";
	}
}

function getMatches(input){
	var matchList = [];

	for (var i = 0; i < characterLength; i++) {
		// Compares if there is a match between the input text and name object in the characters array
		if(characters[i].name.toLowerCase().startsWith(input)){
			// populate the matchList empty array
			matchList.push(characters[i]);
		}
	}
	return matchList;
}

// Populate the ul html element if theres a match
function displayMatches(matches){	
	for (var matchCounter = 0; matchCounter < matches.length; matchCounter++) {
		// Create li element inside ul with the name from the characters array
		autoCompleteResult.innerHTML += '<li class="result">' + matches[matchCounter].vehicle_image + '' +
										'<span class="result_name">' + matches[matchCounter].name +'</span>' +
										'<input type="hidden" class="matches_index" value="'+ matchCounter +'">' +
										'<input type="hidden" class="result_index" value="'+ matches[matchCounter].index +'"></li>';
	}
	highlightResult(focusHighlight);
	toggleResult("show");
}

function highlightResult(highlightedIndex){
	for (var childrenIndex = 0; childrenIndex < autoCompleteResult.children.length; childrenIndex++) {
		autoCompleteResult.children[childrenIndex].classList.remove("highlighted");
	}
	autoCompleteResult.children[highlightedIndex].classList.add("highlighted");
}

function changeHtmlElement(characterData){
	toggleCharacterInfoEnding(characterData.player_type);
	changeColor(characterData.driver_deamanor, characterData.player_type);

	var handlingHtml = document.getElementById("handling");
	var armorHtml = document.getElementById("armor");
	var specialWeaponHtml = document.getElementById("stats_special_weapon");
	var speedHtml = document.getElementById("speed");

	var elements ={
		name: document.getElementsByClassName("character_name")[0].innerHTML = characterData.name,
		type_of_car: document.getElementById("type_of_car").innerHTML = characterData.type_of_car,
		driver_deamanor: document.getElementById("driver_demeanor").innerHTML = characterData.driver_deamanor,
		special_weapon_desc: document.getElementById("special_weapon_desc").innerHTML = characterData.special_weapon_desc,

		// Javascript closure self invoked and doesnt need to be called, 
		// Pass the needed characterData variable to the functions
		// Keep createing new element div with a class name of stats 
		// Then append it to its parent node until the counter is equal to the passed variable

		handling: (function(){
			handlingHtml.innerHTML = '';
			for (var handlingStat = 0; handlingStat < characterData.handling; handlingStat++) {
				var stat = document.createElement("div");
				stat.className = "stats";
				handlingHtml.appendChild(stat);
			}
		}()),
		armor: (function(){
			armorHtml.innerHTML = '';
			for (var armorStat = 0; armorStat < characterData.armor; armorStat++) {
				var stat = document.createElement("div");
				stat.className = "stats";
				armorHtml.appendChild(stat);
			}
		}()),
		special_weapon_stats: (function(){
			specialWeaponHtml.innerHTML = '';
			for (var specialWeaponStat = 0; specialWeaponStat < characterData.special_weapon_stats; specialWeaponStat++) {
				var stat = document.createElement("div");
				stat.className = "stats";
				specialWeaponHtml.appendChild(stat);
			}
		}()),
		speed: (function(){
			speedHtml.innerHTML = '';
			for (var speedStat = 0; speedStat < characterData.speed; speedStat++) {
				var stat = document.createElement("div");
				stat.className = "stats";
				speedHtml.appendChild(stat);
			}
		}()),
		ending_video: document.getElementById("ending").innerHTML = characterData.ending_video,
		vehicle_gif: document.getElementById("vehicle_gif").innerHTML = characterData.vehicle_gif,
		//special_weapon_gif: document.getElementById("special_weapon_gif").innerHTML = characterData.special_weapon_gif
	}
	return elements;
}
	
window.onload = changeHtmlElement(characters[index]);


