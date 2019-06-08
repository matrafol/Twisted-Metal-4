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
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	},
	{
		index: 3,
		player_type: "Boss",
		name: "Crusher",
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
	},
];

var index = 0;
const characterLength = characters.length;
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

nextButton.addEventListener("click", function(){
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
});

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

	if(autoCompleteResult.classList.contains('visible')){
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

function toggleResult(action){
	if(action == "hide"){
		autoCompleteResult.classList.remove('visible');
		autoCompleteResult.innerHTML = '';
	} else if(action == "show"){
		autoCompleteResult.classList.add('visible');
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

function changeHtmlElement(characterData){
	toggleCharacterInfoEnding(characterData.player_type);

	var handlingHtml = document.getElementById("handling");
	var armorHtml = document.getElementById("armor");
	var specialWeaponHtml = document.getElementById("stats_special_weapon");
	var speedHtml = document.getElementById("speed");

	var elements ={
		name: document.getElementsByClassName("character_name")[0].innerHTML = characterData.name,
		type_of_car: document.getElementById("type_of_car").innerHTML = characterData.type_of_car,
		driver_deamanor: document.getElementById("driver_demeanor").innerHTML = characterData.driver_deamanor,
		special_weapon_desc: document.getElementById("special_weapon_desc").innerHTML = characterData.special_weapon_desc,

		// Javascript closure, pass the needed characterData variable to the functions
		// Keep createing new element div with a class name of stats 
		// Then append it to its parent node until the counter is equal to the passed variable

		handling: (function(handling){
			handlingHtml.innerHTML = '';
			for (var handlingStat = 0; handlingStat < handling; handlingStat++) {
				var stat = document.createElement("div");
				stat.className = "stats";
				handlingHtml.appendChild(stat);
			}
		}(characterData.handling)),
		armor: (function(armor){
			armorHtml.innerHTML = '';
			for (var armorStat = 0; armorStat < armor; armorStat++) {
				var stat = document.createElement("div");
				stat.className = "stats";
				armorHtml.appendChild(stat);
			}
		}(characterData.armor)),
		special_weapon_stats: (function(specialWeapon){
			specialWeaponHtml.innerHTML = '';
			for (var specialWeaponStat = 0; specialWeaponStat < specialWeapon; specialWeaponStat++) {
				var stat = document.createElement("div");
				stat.className = "stats";
				specialWeaponHtml.appendChild(stat);
			}
		}(characterData.special_weapon_stats)),
		speed: (function(speed){
			speedHtml.innerHTML = '';
			for (var speedStat = 0; speedStat < speed; speedStat++) {
				var stat = document.createElement("div");
				stat.className = "stats";
				speedHtml.appendChild(stat);
			}
		}(characterData.speed)),
		ending_video: document.getElementById("ending").innerHTML = characterData.ending_video
	}
	return elements;
}
	
window.onload = changeHtmlElement(characters[index]);


