$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});
//ocultando flecha
$('.js-back').hide();
//Función para imprimir una noticia
var printNews = function(){
	$('#news').html('NUEVAS RECETAS');
}
printNews();
/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);
	for (var i=0; i<recipesArray.length; i++){
		if(recipesArray[i].hasOwnProperty('highlighted') == true){
			renderRecipe(recipesArray[i]);
		}
	}
}
/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/

function renderRecipe(recipe) {
	//console.log(recipe.source.name);
	//console.log('Voy a pintar la receta: ', recipe);
  //crear html e imprimirlo en la clase list-recipes
	$('.list-recipes').append(
		'<a class="item-recipe" href="#">' +
		'<span class = "title-recipe">' + recipe.title + '</span>' +
		'<span class = "author-recipe" >' + recipe.source.name + '</span>' +
		'</a>'
		)
}
/*
* Función que se encarga de pintar todas las actividades
*/
var activitiesArray = activities;
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	for (var i=0; i<activitiesArray.length;i++){
		renderActivity(activitiesArray[i]);
		if(activitiesArray.length > 0){
			$('.wrapper-message').hide();
		}
	}
}
renderActivities(activitiesArray);

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	$('.list-activities').append(
		'<a class="item-activity" href="#">' +
			'<span class = "attribution">' +
				'<span class = "avatar">' +
					'<img class = "image-avatar" src="' + recipe.userAvatar + '">' +
				'</span>' +
				'<span class = "meta">' +
				'<span class = "author-recipe" >' + recipe.userName + '</span>' +
				'<span class = "author-recipe" >' + recipe.recipeName + '</span>' +
				'<span class = "author-recipe" >' + recipe.place + '</span>' +
				'</span>' +
			'</span>' +
			'<div class = "bg-image" style="background-image: url(' + recipe.image + ')" >' + '</div>' +
		'</a>'
		)
}
/*'<a href = "#" class = "item-recipe">' +
				 '<span class = "attribution">'+
				 '<span class = "title-recipe">' + recipe.title + '</span>' +
				 '<span class = "metadata-recipe">'+
				 '<span class = "author-recipe" >' + recipe.source.name + '</span>' +
				 '<span class = "bookmark-recipe">' +
				 '<span class = "icon-bookmark">' + '</span>' +
				 '</span>' +
				 '</span>' +
				 '</span>' +
				// '<img src="assets/' +   + '">' +
				 '</a>'*/
