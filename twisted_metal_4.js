const characters = [
	{
		index: 0,
		player_type: "Contestant",
		name: "Calypso",
		type_of_car: "Nuke Mobile",
		vehicle_image: '<img src="images/Characters/calypso/calypso-vehicle.png">',
		driver_deamanor: "Evil",
		special_weapon_desc: 
			"Calypso employs powerful nuclear missles which must be detonated near his opponents.",
		handling: 1,
		armor: 4,
		special_weapon_stats: 4,
		speed: 1,
		ending_video: '<iframe src="https://www.youtube.com/embed/JhjCPxbezxE" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif : '<iframe src="https://giphy.com/embed/65HTa72NRQ1WEc0Jh0" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/Characters/calypso/calypso-special-video.mp4'
	},
	{
		index: 1,
		player_type: "Contestant",
		name: "Captain Grimm",
		type_of_car: "Pirate ship car",
		vehicle_image: '<img src="images/characters/captain-grimm/captain-grimm-vehicle.png">',
		driver_deamanor: "Evil",
		special_weapon_desc: 
			"Captain Grimm shoots a fiery cannon ball that sets fire to and damages heavily any opponent.",
		handling: 5,
		armor: 1,
		special_weapon_stats: 3,
		speed: 4,
		ending_video: '<iframe src="https://www.youtube.com/embed/rR3uSkcBWz8" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/B1pIKKLYY2noZJKURp" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/captain-grimm/captain-grimm-special-video.mp4'
	},
	{
		index: 2,
		player_type: "Boss",
		name: "Crusher",
		vehicle_image: '<img src="images/characters/bosses/crusher-vehicle.png">',
		vehicle_gif: '<iframe src="https://giphy.com/embed/LXBQotN1QfhLJFwRK2" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/bosses/crusher-special-video.mp4'
	},
	{
		index: 3,
		player_type: "Contestant",
		name: "Drag Queen",
		type_of_car: "Hot Rodder",
		vehicle_image: '<img src="images/characters/drag-queen/drag-queen-vehicle.png">',
		driver_deamanor: "Twisted",
		special_weapon_desc: 
			"Drag Queen's flame thrower projects forward from the car's grille and sets opponents on fire.",
		handling: 1,
		armor: 2,
		special_weapon_stats: 3,
		speed: 4, 
		ending_video: '<iframe src="https://www.youtube.com/embed/7ACQyrZJ4zM" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/uBmCGBxTxQE3uTkbJx" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/drag-queen/drag-queen-special-video.mp4'
	},
	{
		index: 4,
		player_type: "Contestant",
		name: "General Warthog",
		type_of_car: "WW1 tank",
		vehicle_image: '<img src="images/characters/general-warthog/general-warthog.png">',
		driver_deamanor: "Twisted",
		special_weapon_desc: 
			"General Warthog plants a marker/target which initializes an ion satellite and later activates a powerful ion blast.",
		handling: 1,
		armor: 4,
		special_weapon_stats: 4,
		speed: 2, 
		ending_video: '<iframe src="https://www.youtube.com/embed/kGjfTIUC14g" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/X9QDFPdNXswVDJRVdB" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/general-warthog/general-warthog-special-video.mp4'
	},
	{
		index: 5,
		player_type: "Contestant",
		name: "Goggle Eyes",
		type_of_car: "Roach Coach",
		vehicle_image: '<img src="images/characters/goggle-eyes/goggle-eyes-vehicle.png">',
		driver_deamanor: "Evil",
		special_weapon_desc: 
			"Goggle Eyes sprays a green hydrochloric toxic acid which causes on contact massive damage.",
		handling: 3,
		armor: 3,
		special_weapon_stats: 4,
		speed: 3, 
		ending_video: '<iframe src="https://www.youtube.com/embed/mq3c8tS3n7E" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/AFPKKdM4jaWOrTCA5R" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/goggle-eyes/goggle-eyes-special-video.mp4'
	},
	{
		index: 6,
		player_type: "Contestant",
		name: "Meter Maid",
		type_of_car: "3 Wheeled meter car",
		vehicle_image: '<img src="images/characters/meter-maid/meter-maid-vehicle.png">',
		driver_deamanor: "Good",
		special_weapon_desc: 
			"Meter Maid releases an energy circumference that syphons an opponent's health unto her own.",
		handling: 3,
		armor: 1,
		special_weapon_stats: 3,
		speed: 2, 
		ending_video: '<iframe src="https://www.youtube.com/embed/0E0BxWA_nKM" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/2SYi7BPHV8JjCIhUsj" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/meter-maid/meter-maid-special-video.mp4'
	},
	{
		index: 7,
		player_type: "Contestant",
		name: "Micro Blast",
		type_of_car: "Toy Car",
		vehicle_image: '<img src="images/characters/micro-blast/micro-blast-vehicle.png">',
		driver_deamanor: "Evil",
		special_weapon_desc: 
			"Micro Blast engages a series of rapid fire speed missles called the gatliner.",
		handling: 4,
		armor: 1,
		special_weapon_stats: 2,
		speed: 4, 
		ending_video: '<iframe src="https://www.youtube.com/embed/Hs6S9J0SzPs" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/pP32qbexY3fxs782M4" frameBorder="0" class="giphy-embed" allowFullScreen>',
		special_weapon_video: 'images/characters/micro-blast/micro-blast-special-video.mp4'
	},
	{
		index: 8,
		player_type: "Boss",
		name: "Minion",
		vehicle_image: '<img src="images/characters/bosses/minion-vehicle.png">',
		vehicle_gif: '<iframe src="https://giphy.com/embed/YVs5j7f3A7fT0bHo3w" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/bosses/minion-special-video.mp4'
	},
	{
		index: 9,
		player_type: "Boss",
		name: "Moon Buggy",
		vehicle_image: '<img src="images/characters/bosses/moon-buggy-vehicle.png">',
		vehicle_gif: '<iframe src="https://giphy.com/embed/5EAtpVMxs8BjEBhDkX" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/bosses/moon-buggy-special-video.mp4'
	},
	{
		index: 10,
		player_type: "Contestant",
		name: "Mr. Zombie",
		type_of_car: "Dracula",
		vehicle_image: '<img src="images/characters/mr-zombie/mr-zombie-vehicle.png">',
		driver_deamanor: "Evil",
		special_weapon_desc: 
			"Mr. Zombie fires a spinning skull which draws enemies in as it electrifies then explodes at its final stage.",
		handling: 5,
		armor: 3,
		special_weapon_stats: 3,
		speed: 3, 
		ending_video: '<iframe src="https://www.youtube.com/embed/tft8aCcUnS0" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/ZclQTWRqM8XAHdBMMQ" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/mr-zombie/mr-zombie-special-video.mp4'
	},
	{
		index: 11,
		player_type: "Contestant",
		name: "Orbital",
		type_of_car: "Sleek sports car",
		vehicle_image: '<img src="images/characters/orbital/orbital-vehicle.png">',
		driver_deamanor: "Good",
		special_weapon_desc: 
			"Orbital's special is the teleorb. It electrifies the enemy and then freezes them.",
		handling: 5,
		armor: 2,
		special_weapon_stats: 3,
		speed: 5, 
		ending_video: '<iframe src="https://www.youtube.com/embed/jNk2cZSBq5g" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/1xOyKkRUJHItqTtCPh" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/orbital/orbital-special-video.mp4'
	},
	{
		index: 12,
		player_type: "Contestant",
		name: "Pizza Boy",
		type_of_car: "Illegal street racer",
		vehicle_image: '<img src="images/characters/pizza-boy/pizza-boy-vehicle.png">',
		driver_deamanor: "Good",
		special_weapon_desc: 
			"Pizza Boy sends out two giant, spinning pizza saw blades that home-in on an opponent.",
		handling: 5,
		armor: 2,
		special_weapon_stats: 2,
		speed: 2, 
		ending_video: '<iframe src="https://www.youtube.com/embed/e1oSZkJHMD0" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/dZ4ewiXYDPoajYWvC6" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/pizza-boy/pizza-boy-special-video.mp4'
	},
	{
		index: 13,
		player_type: "Contestant",
		name: "Quatro",
		type_of_car: "Xeon Hoverbike",
		vehicle_image: '<img src="images/characters/quatro/quatro-vehicle.png">',
		driver_deamanor: "Good",
		special_weapon_desc: 
			"Quatro sends out a pulse of microwave radiation around his hover trike that severly damages opponents.",
		handling: 5,
		armor: 1,
		special_weapon_stats: 2,
		speed: 5, 
		ending_video: '<iframe src="https://www.youtube.com/embed/6sthf_fCar4" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/1vZaI4C0D7W99GaCCo" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/quatro/quatro-special-video.mp4'
	},
	{
		index: 14,
		player_type: "Boss",
		name: "Rc Car",
		vehicle_image: '<img src="images/characters/bosses/rc-car-vehicle.png">',
		vehicle_gif: '<iframe src="https://giphy.com/embed/cXRdGz9kOd3j0uBdFJ" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/bosses/rc-car-special-video.mp4'
	},
	{
		index: 15,
		player_type: "Boss",
		name: "Super Axel",
		vehicle_image: '<img src="images/characters/bosses/super-axel-vehicle.png">',
		vehicle_gif: '<iframe src="https://giphy.com/embed/xAEKvOLazXtAXfUVpc" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/bosses/super-axel-special-video.mp4'
	},
	{
		index: 16,
		player_type: "Boss",
		name: "Super Auger",
		vehicle_image: '<img src="images/characters/bosses/super-auger-vehicle.png">',
		vehicle_gif: '<iframe src="https://giphy.com/embed/RKKRKpRJgyo8mRMBaN" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/bosses/super-auger-special-video.mp4'
	},
	{
		index: 17,
		player_type: "Boss",
		name: "Super Slamm",
		vehicle_image: '<img src="images/characters/bosses/super-slamm-vehicle.png">',
		vehicle_gif: '<iframe src="https://giphy.com/embed/1xNTc7dVQ4kwJrWxo5" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/bosses/super-slamm-special-video.mp4'
	},
	{
		index: 18,
		player_type: "Boss",
		name: "Super Thumper",
		vehicle_image: '<img src="images/characters/bosses/super-thumper-vehicle.png">',
		vehicle_gif: '<iframe src="https://giphy.com/embed/WNId4R9eYqeQYlNIE4" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/bosses/super-thumper-special-video.mp4'
	},
	{
		index: 19,
		player_type: "Boss",
		name: "Sweet Tooth",
		vehicle_image: '<img src="images/characters/bosses/sweet-tooth-vehicle.png">',
		vehicle_gif: '<iframe src="https://giphy.com/embed/fGIh5oHyZCsq61pwAs" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/bosses/sweet-tooth-special-video.mp4'
	},
	{
		index: 20,
		player_type: "Contestant",
		name: "The Joneses",
		type_of_car: "Family wagon",
		vehicle_image: '<img src="images/characters/the-joneses/the-joneses-vehicle.png">',
		driver_deamanor: "Good/Tiwsted",
		special_weapon_desc: 
			"The Joneses launch three strong homing missles called hornets which causes heavy damage on an opponent.",
		handling: 3,
		armor: 2,
		special_weapon_stats: 2,
		speed: 3, 
		ending_video: '<iframe src="https://www.youtube.com/embed/tsyz-GtmsZY" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/93lLEJph06lkr3zwVm" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/the-joneses/the-joneses-special-video.mp4'
	},
	{
		index: 21,
		player_type: "Contestant",
		name: "Trash Man",
		type_of_car: "Garbage Truck",
		vehicle_image: '<img src="images/characters/trash-man/trash-man-vehicle.png">',
		driver_deamanor: "Twisted",
		special_weapon_desc: 
			"Using large hydraulic arms, Trash man picks up and slams his opponents repeatedly onto spikes mounted on his roof.",
		handling: 1,
		armor: 4,
		special_weapon_stats: 4,
		speed: 3, 
		ending_video: '<iframe src="https://www.youtube.com/embed/em4gs1gk1mw" \
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		vehicle_gif: '<iframe src="https://giphy.com/embed/g4XnB39inFnHhHHzpR" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
		special_weapon_video: 'images/characters/trash-man/trash-man-special-video.mp4'
	}
];

var index = 0;
const characterLength = characters.length;

/*********************************************************************************************/
/*								NEXT AND PREVIOUS BUTTON                             		 */
/*********************************************************************************************/

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

/*********************************************************************************************/
/*								SEARCH BUTTON AND AUTO COMPLETE                              */
/*********************************************************************************************/

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

// Hides auto complete result when user click anywhere on the website
document.body.addEventListener('click', function(e){
		toggleResult("hide");
		focusHighlight = 0;
});

/*********************************************************************************************/
/*								      MANIPULATE DOM                             			 */
/*********************************************************************************************/

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
		special_weapon_video: (function(){
		 	var video = document.getElementById("video");
		 	video.src = characterData.special_weapon_video;
		 	video.innerHTML = "Your browser does not support HTML5 video.";
		 	video.load();
		}()),
	}
	return elements;
}
	
window.onload = changeHtmlElement(characters[index]);


