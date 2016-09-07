window.addEventListener("load", function() {
    var button = document.getElementById("calcular");
    button.addEventListener("click", function() {
     var ingresoSegundos = parseInt(document.getElementById("ingresoSegundos").value);
	setInterval(alertFunc, ingresoSegundos*1000 );
	function alertFunc() {
	   document.body.style.backgroundColor = "#" + (Math.random()	* 0xFFFFFF<<0).toString(16);
	}
});
});



/*
function myFunction() {
    setInterval(alertFunc, 2000);
}
function alertFunc() {
	var color =  "#" + (Math.random()	* 0xFFFFFF<<0).toString(16);
	   document.body.style.backgroundColor = color;
}
myFunction(); */