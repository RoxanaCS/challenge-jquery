$(document).ready( function(){
console.log("hola  Mundo");
});
//ocultando menu
$('.js-menu').hide();

//funciones para las pestañas make y recipe

$('.js-show-recipe').click(function(){
	$('.page').removeClass('make');
});

$('.js-show-make').click(function(){
	$('.page').addClass('make');
});
