var colors = ["red", "blue", "green", "yellow", "purple", "orange", "white", "black"];
var random = [];

function randomizeArray(colors){
    for (var i = 0; i < 4; i++ ) {
    	random[i] = colors [Math.floor(Math.random() * colors.length)];
	}
};
randomizeArray(colors);


console.log(random);

//Klikfunctie
function chooseColor(colors){
	var loop = 0;
	var field_element = document.getElementsByClassName("field");

	for (var i = 0; i <field_element.length; i++)


	field_element[i].addEventListener("click", function(){
		console.log(colors[loop++]);
		//console.log(field_element[i]);
		field_element[0].style.backgroundColor = "red";
		if (loop >= colors.length) {
			loop = 0;
		}
	});
}
chooseColor(colors);
//computerobjecten
//