'use strict';

var $ = window.jQuery;
var MarvelApi = window.MarvelApi;

var key = 'a548aee0bde874ea460773884934a865';
var api = new MarvelApi(key);

api.findSeries('avengers').then(function (serie) {
	var serieImage = 'url(' + serie.thumbnail.path + '.' + serie.thumbnail.extension + ')';
	$('.Layout').css('background-image', serieImage);
	var characters = serie.characters.items;
	var promises = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = characters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var character = _step.value;

			var promise = api.getResourceURI(character.resourceURI);
			promises.push(promise);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator['return']) {
				_iterator['return']();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return Promise.all(promises);
})

//filtro  !!null -> false
.then(function (characters) {
	return characters.filter(function (character) {
		return !!character.thumbnail;
	})
	// return !!character.thumbnail && !!character.description
	// quitamos con filter los personajes que no tienen thumbnail
	;
}).then(function (characters) {
	characters = shuffle(characters);
	for (var i = 0; i < 5; i++) {
		var character = characters[i];
		drawCharacter(character);
	}
})['catch'](function (err) {
	console.error(err);
});

$('.CharacterForm').on('submit', function (event) {
	//quito evento default
	event.preventDefault();

	var name = $(this).find('.CharacterForm-name').val();
	api.searchCharacter(name).then(function (character) {
		drawCharacter(character);
	})['catch'](function (reason) {
		if (reason === 'no se encontro el personaje') {
			$('.CharacterForm-message').text(reason);
		}
	});
});

function renderCharacter(character) {
	//generamos un número aleatorio entre 500 y 1000
	var attackPoint = Math.ceil(Math.random() * 500) + 500;
	return '\n\t<div class="Card">\t\t\n\t\t<h2 class="Card-name">' + character.name + '</h2><img src="' + character.thumbnail.path + '.' + character.thumbnail.extension + '" alt="wolverine" class="Card-image"/>\n\t\t<div class="Card-description">' + character.description + '</div>\n\t\t<div class="Card-attack" data-attack="' + attackPoint + '">' + attackPoint + ' puntos de ataque</div>\n\t</div> ';
}
function shuffle(arr) {
	for (var i = 0; i < arr.length; i++) {
		var tmp = arr[i];
		var index = Math.floor(Math.random() * arr.length - 1);
		arr[i] = arr[index];
		arr[index] = tmp;
	}
	return arr;
}

function drawCharacter(character) {
	var template = renderCharacter(character);
	var $card = $(template); //creo los elementos
	$card.on('click', function (event) {
		var $this = $(this);
		var attack = $this.find('.Card-attack');
		console.log(attack.data('attack'));
	});
	$('.Battle-player').append($card);
}
//llamar a la api de marvel
//dibujar una carta con el personaje que regrese la api
//si no regresa un personaje -> no hay personaje
// si regresa sólo un personaje -> dibujar carta
// si regresa más de un personaje -> dibujar carta con el primer personaje que regrese la api