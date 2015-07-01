'use strict';

var $ = window.jQuery;
var page = window.page;

var homeTemplate = ' <section class="Layout">\n      <section class="Layout-antagonist"> \n        <div class="Card">\t\t\n          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n          <div class="Card-description">Wolverine es muy poderoso</div>\n          <div class="Card-attack">500puntos de ataque</div>\n        </div>\n        <div class="Card">\t\t\n          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n          <div class="Card-description">Wolverine es muy poderoso</div>\n          <div class="Card-attack">500puntos de ataque</div>\n        </div>\n        <div class="Card">\t\t\n          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n          <div class="Card-description">Wolverine es muy poderoso</div>\n          <div class="Card-attack">500puntos de ataque</div>\n        </div>\n        <div class="Card">\t\t\n          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n          <div class="Card-description">Wolverine es muy poderoso</div>\n          <div class="Card-attack">500puntos de ataque</div>\n        </div>\n        <div class="Card">\t\t\n          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n          <div class="Card-description">Wolverine es muy poderoso</div>\n          <div class="Card-attack">500puntos de ataque</div>\n        </div>\n      </section>\n      <section class="Layout-main">\n        <div class="Layout-status">\n          <div class="Status">\n            <h3 class="Status-player">Aguja</h3>\n            <p class="Status-points">10000</p>\n          </div>\n          <div class="Status">\n            <h3 class="Status-player">Andre</h3>\n            <p class="Status-points">10000</p>\n          </div>\n        </div>\n        <div class="Layout-battle"> \n          <div class="Battle">\n            <div class="Battle-antagonist">\n              <div class="Card">\t\t\n                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n                <div class="Card-description">Wolverine es muy poderoso</div>\n                <div class="Card-attack">500puntos de ataque</div>\n              </div>\n              <div class="Card">\t\t\n                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n                <div class="Card-description">Wolverine es muy poderoso</div>\n                <div class="Card-attack">500puntos de ataque</div>\n              </div>\n              <div class="Card">\t\t\n                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n                <div class="Card-description">Wolverine es muy poderoso</div>\n                <div class="Card-attack">500puntos de ataque</div>\n              </div>\n              <div class="Card">\t\t\n                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n                <div class="Card-description">Wolverine es muy poderoso</div>\n                <div class="Card-attack">500puntos de ataque</div>\n              </div>\n              <div class="Card">\t\t\n                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n                <div class="Card-description">Wolverine es muy poderoso</div>\n                <div class="Card-attack">500puntos de ataque</div>\n              </div>\n            </div>\n            <div class="Battle-player">\n              <div class="Card">\t\t\n                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n                <div class="Card-description">Wolverine es muy poderoso</div>\n                <div class="Card-attack">500puntos de ataque</div>\n              </div>\n              <div class="Card">\t\t\n                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n                <div class="Card-description">Wolverine es muy poderoso</div>\n                <div class="Card-attack">500puntos de ataque</div>\n              </div>\n              <div class="Card">\t\t\n                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n                <div class="Card-description">Wolverine es muy poderoso</div>\n                <div class="Card-attack">500puntos de ataque</div>\n              </div>\n              <div class="Card">\t\t\n                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n                <div class="Card-description">Wolverine es muy poderoso</div>\n                <div class="Card-attack">500puntos de ataque</div>\n              </div>\n              <div class="Card">\t\t\n                <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n                <div class="Card-description">Wolverine es muy poderoso</div>\n                <div class="Card-attack">500puntos de ataque</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="Layout-phases"> \n          <div class="Phases">\n            <p>OMG que ataque fuerte, le quitaste 300 puntos</p>\n          </div>\n        </div>\n      </section>\n      <section class="Layout-player"> \n        <div class="Card">\t\t\n          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n          <div class="Card-description">Wolverine es muy poderoso</div>\n          <div class="Card-attack">500puntos de ataque</div>\n        </div>\n        <div class="Card">\t\t\n          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n          <div class="Card-description">Wolverine es muy poderoso</div>\n          <div class="Card-attack">500puntos de ataque</div>\n        </div>\n        <div class="Card">\t\t\n          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n          <div class="Card-description">Wolverine es muy poderoso</div>\n          <div class="Card-attack">500puntos de ataque</div>\n        </div>\n        <div class="Card">\t\t\n          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n          <div class="Card-description">Wolverine es muy poderoso</div>\n          <div class="Card-attack">500puntos de ataque</div>\n        </div>\n        <div class="Card">\t\t\n          <h2 class="Card-name">Wolverine</h2><img src="./public/img/wolverine.jpg" alt="wolverine" class="Card-image">\n          <div class="Card-description">Wolverine es muy poderoso</div>\n          <div class="Card-attack">500puntos de ataque</div>\n        </div>\n      </section>\n    </section> ';

var signinTemplate = ' <label>Ingresa tu nombre</label>\n    <input type="text" id="firstName" name="firstName" tabindex="1" placeholder="aguja, agil" class="Signin-name-input"/>\n    <button tabindex="2" class="Signin-button">Ingresar</button> ';
//page('ruta destino', lo que quiero que pase)

// page('/', function() {
// 	console.log('Estoy navegando al home')
// })
// El código anterior se puede mejorar:
page('/', restrict, home);
page('/signin', signin);
//todo listo, ahora a trabajar, page!
page();

function restrict(ctx, next) {
  console.log('Restricting!');
  console.log('Context :' + JSON.stringify(ctx));
  console.log('window.user :' + window.user);
  if (!window.user) return page('/signin');

  next();
}

function home() {
  console.log('Estoy navegando al home');
  $('.app-container').html($(homeTemplate));
}

function signin() {
  //inyecto el html de signin en el app-container
  $('.app-container').html(signinTemplate);
  $('.Signin-button').on('click', function (event) {
    event.preventDefault();
    // obtengo el contenido del input
    var username = $('.Signin-name-input')[0].value;
    if (!username) return alert('ingrese un nombre válido');
    //window.location = '/' //ordeno que vaya al home(ojo! vuelve al servidor)
    window.user = { username: username };
    page('/');
  });
}