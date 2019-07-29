// creating content for the div movies

var bigBox = document.getElementById("movies");
var btn = document.getElementsByClassName("btn");
var output = document.getElementsByClassName("output");
var sort = document.getElementById("sortBtn");
var smallBox = document.getElementsByClassName("smallBox");

for(var i=0;i<movies.length;i++) {
	bigBox.innerHTML += `<div class=smallBox><div><img src="${movies[i].pic}"></div><div><h2>${movies[i].name}</h2><p>${movies[i].year}</p><p>${movies[i].description}</p><div class="likes"><button class="btn" id="${i}">Like <i class="fa fa-thumbs-up"></i></button><output type="number" class="output" id="${i}">0</output></div></div></div>`;
}

//creating event listeners for buttons

for(var i=0;i<btn.length;i++){

  btn[i].addEventListener("click",function(){incrementLikes(this.getAttribute("id"))},false);
    }

//creating a function that increments the likes
function incrementLikes(buttonID){
	for(var i=0; i<output.length-1; i++) {
		if (output[i].getAttribute("id") == buttonID) {
			output[i].value++;
			break;
		}
	}
} 

//creating a function to sort items on a click

function sortItems() {
	var i, switching, b, shouldSwitch;
	switching = true;
	while (switching) {
		switching = false;
		b = smallBox;
		for (i = 0; i < (b.length - 1); i++) {
			shouldSwitch = false;
			if (Number(output[i].innerHTML) < Number(output[i + 1].innerHTML)) {
				shouldSwitch = true;
			break;
			}		
		}
		if (shouldSwitch) {
			b[i].parentNode.insertBefore(b[i + 1], b[i]);
			switching = true;
		}
	}
}

//alternative solution

// function sortItems() {
// 	var switching_happened = true;
// 	while (switching_happened == true) { //Make a loop that will continue until no switching has happened
// 		switching_happened = false; //start by saying: no switching has happened
// 		for (var i = 0; i < (smallBox.length - 1); i++) {
// 			if (Number(output[i].innerHTML) < Number(output[i + 1].innerHTML)) {
// 				smallBox[i].parentNode.insertBefore(smallBox[i + 1], smallBox[i]);
// 				switching_happened = true; // restart while loop *switching happened*
// 				break; //exit for loop
// 			}
// 		}
// 	}
// }

//creating an event listener for sorting
sort.addEventListener("click", sortItems, false);


