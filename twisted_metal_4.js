/* 
	Object array

	'names': ,
	character_image:,
	'type_of_car' : ,
	'driver_deamanor' :, 
	'special_weapon_info' :, 
	'special_weapon_gif' : ,
	'vehicle_image' : ,
	'vehicle_gif' : ,
	'ending_video' :, 
	'handling' : ,
	'armor' : ,
	'special_weapon_stats' :,
	'speed' : ,

// Carousel by button
	index = 0;

	if previous button is clicked
		index--
		call function changehtmlelement(index)
		if index == 0
			disable/hide previous button or goes to the last array
	else
		index++
		call changehtmlelement(index)
		if index == index.length - 1(last index)
			disable/hide next button or goes to the first array

// Search function
	auto complete inside the search function displaying the name and vehicle of the character
	if the user input does not match then alert an error or change the html element with search result not found
	else change the index counter according to whom the user searched and call the changeHtmlElement function

*/

// Ending videos https://www.youtube.com/watch?v=VPEcXZuI8qY&list=PLdYcmK9OdqC5Uplp7HMQYhFvuI_1xoWLu
//function getCharacterData(index){
	const characters = [
		{
			index: 0,
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
		}
	];
	//return characters[index];
//}

var index = 0;
const characterLength = characters.length;
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const search = document.getElementById("search");

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
	//console.log(matches);
	//console.log(autoCompleteResult.children);
	// Change the focusHighlight based on mouse hover

	/*var autoCompleteChildren = autoCompleteResult;
	autoCompleteChildren.addEventListener("mouseenter", function(e){
		alert(e.value);
		//document.getElementsByClassName("result_index")[focusHighlight].value
		//highlightResult(selectedIndex);
		if(focusHighlight > 0){
			highlightResult(focusHighlight);
			focusHighlight--;
		} else if(focusHighlight < matches.length - 1){
			highlightResult(focusHighlight);
			focusHighlight++;
		}
	});*/

	/*var test = document.getElementsByClassName("result")[0];
	test.addEventListener("mouseenter", function(e){
		e.classList.add("highlighted");
	});

	test.addEventListener("mouseout", function(e){
		e.classList.remove("highlighted");
	});*/

	document.body.addEventListener('click', function(e){
		toggleResult("hide");
	});

	if(autoCompleteResult.classList.contains('visible')){
		switch(e.key){
			case "Enter":
				// Changes the text inside search
				search.value = document.getElementsByClassName("result")[focusHighlight].children[1].innerHTML;
				index = document.getElementsByClassName("result_index")[focusHighlight].value;
				changeHtmlElement(characters[index]);
				toggleResult("hide");
				focusHighlight = 0;
				e.preventDefault();
				break;
			case "ArrowUp":
				if(focusHighlight > 0){
					focusHighlight--;
					highlightResult(focusHighlight);
				}
				break; 
			case "ArrowDown":
				if(focusHighlight < matches.length - 1){
					focusHighlight++;
					highlightResult(focusHighlight);
				}
				break;
		}
	}
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
		// indexOf method returns -1 if it didnt find any match
		// Compares if there is a match between the input text and name object in the characters array
		//if(characters[i].name.toLowerCase().indexOf(input.toLowerCase()) != -1){
		if(characters[i].name.toLowerCase().startsWith(input)){
			// populate the matchList empty array
			matchList.push(characters[i]);
			//index = i; BUGGED
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
										'<input type="hidden" class="result_index" value="'+ matches[matchCounter].index +'"></li>';
	}
	highlightResult(focusHighlight);
	toggleResult("show");
}

// Add the css highlighted 
function highlightResult(highlightedIndex){
	for (var childrenIndex = 0; childrenIndex < autoCompleteResult.children.length; childrenIndex++) {
		autoCompleteResult.children[childrenIndex].classList.remove("highlighted");
	}
	autoCompleteResult.children[highlightedIndex].classList.add("highlighted");
}

function changeHtmlElement(characterData){
	var elements ={
		name: document.getElementsByClassName("character_name")[0].innerHTML = characterData.name,
		type_of_car: document.getElementById("type_of_car").innerHTML = characterData.type_of_car,
		driver_deamanor: document.getElementById("driver_demeanor").innerHTML = characterData.driver_deamanor,
		special_weapon_desc: document.getElementById("special_weapon_desc").innerHTML = characterData.special_weapon_desc,
		/*handling: function(characterData){
			for (var handlingStat = 0; handlingStat < characterData.handling; handlingStat++) {
				var stat = document.createElement("div");
				stat.className = "stats";
				document.getElementById("handling").appendChild(stat);
			}
		},*/
		armor: characterData.armor,
		special_weapon_stats: characterData.special_weapon_stats,
		speed: characterData.speed,
		ending_video: document.getElementById("ending").innerHTML = characterData.ending_video
	}
	return elements;
}

//changeHtmlElement(characters[1]);
//console.log(changeHtmlElement(characters[1]));
//console.log(changeHtmlElement(getCharacterData(1)));


/*for (var data in getCharacterData(2)) {
	console.log(getCharacterData(2)[data]);
}*/


// get the character data from function then return the object value that you want
/*for (var speed_stat = 0; speed_stat < getCharacterData(0).speed; speed_stat++) {
	var stat = document.createElement("div");
	stat.className = "stats";
	document.getElementById("speed").appendChild(stat);
}*/
//console.log(getCharacterData(1).speed);
	


