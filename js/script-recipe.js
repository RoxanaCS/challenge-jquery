$(document).ready( function(){
console.log("hola  Mundo");
});
//ocultando menu
$('.js-menu').hide();

//funciones para las pestañas make y recipe

$('.js-show-recipe').click(function(){
	$('.page').removeClass('make');
	$('.js-show-recipe').addClass('active');
	$('.js-show-make').removeClass('active');
});

$('.js-show-make').click(function(){
	$('.page').addClass('make');
	$('.js-show-make').addClass('active');
	$('.js-show-recipe').removeClass('active');
});

//flecha para atrás
$('.js-back').click(function(){
	window.location.href = "file:///C:/Users/Roxana/Documents/challenge-jquery/index.html";
})
