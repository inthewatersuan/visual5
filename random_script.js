var first_animal = document.getElementById("_1");
var second_animal = document.getElementById("_2");

//console.log(first_animal, second_animal);
var animals;

function setup(){

	noCanvas();
	loadStrings('random_list.txt', stringLoaded);

}

function stringLoaded(results){

	animals = split(results[0],",");
	//console.log(animals);
	//console.log(results[0]);

}

/*
function mousePressed(){

	var random_number_1 = floor(random(0,8));
	var random_number_2 = floor(random(0,8));
	console.log(animals[random_number_1],animals[random_number_2]);

	first_animal.innerHTML = animals[random_number_1];
	second_animal.innerHTML = animals[random_number_2];

}
*/


document.getElementById("test").addEventListener("click",function(){

	var random_number_1 = floor(random(0,155));
	var random_number_2 = floor(random(0,155));
	console.log(animals[random_number_1],animals[random_number_2]);

	first_animal.innerHTML = animals[random_number_1];
	second_animal.innerHTML = animals[random_number_2];
	
},false);