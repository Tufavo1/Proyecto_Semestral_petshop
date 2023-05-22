// Creación de Usuarios
$(document).ready(function () {
  if (typeof Storage !== "undefined") {
    //localStorage.removeItem('usuarios');
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if (usuarios === null) {
      usuarios = [];
      usuarios.push(
        {
          username: "admin",
          password: "admin",
          email: "admin@example.com",
          nombre: "Administrador",
          direccion: "Av. Vicuña Mackenna 4917",
          telefono: "912345678",
          subscription: false,
          logged: false,
        },
        {
          username: "gia.soto",
          password: "123456",
          email: "gia.sotog@duocuc.com",
          nombre: "Gian Soto",
          direccion: "Av. Vicuña Mackenna 4917",
          telefono: "934395563",
          subscription: true,
          logged: false,
        }
      );
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
    const fileName = document.location.pathname.match(/[^\/]+$/)[0];
    if (fileName != "login.html") {
      let html;
      let loggedIn = usuarios.find((usuario) => usuario.logged === true);
      if (loggedIn !== undefined) {
        if (loggedIn.username === "admin") {
          $("#admin-link").toggle();
        }
        html = `
        <p class="m-0 bold" id="dropdown-nombre">
            <i class="fa-solid fa-face-smile"></i>
            ${loggedIn.nombre}
        </p>
        <p class="m-0">
            <i class="fa-solid fa-circle-user"></i>
            ${loggedIn.username} 
        </p>
        <p class="m-0" id="dropdown-substate">
            <i class="fa-solid fa-crown"></i>
            ${loggedIn.subscription ? "Suscrito" : "No Suscrito"}
        </p>
        <li>
            <a class="dropdown-item" href="perfil.html">Ir al perfil</a>
        </li>
        <li>
            <hr class="dropdown-divider" />
        </li>
        <button class="btn dropdown-btn" id="close-session">
            Cerrar Sesión
        </button>`;
        $("#user-info").append(html);
        $("#close-session").on("click", function () {
          usuarios = usuarios.map((usuario) => {
            if (usuario === loggedIn) {
              usuario.logged = false;
            }
            return usuario;
          });
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
          window.location.replace("index.html");
        });

        if (fileName === "perfil.html") {
          $("#nombre").text(loggedIn.nombre);
          $("#email").text(loggedIn.email);
          $("#username").text(loggedIn.username);
          $("#password").text(loggedIn.password);
          $("#direccion").text(loggedIn.direccion);
          $("#telefono").text(loggedIn.telefono);
          if(loggedIn.subscription) {
            html = `
              <h4>Subscripción</h4>
              <p>
                Estado: <b>Suscrito</b><br>
                ¡Gracias por unirte al programa de suscripción de Purrfect PetShop! Ahora eres parte de nuestra comunidad de
                amantes de los animales comprometidos con apoyar a nuestra fundación sin fines de lucro que se dedica a
                rescatar y cuidar a las mascotas más necesitadas.<br>
                <b>Tu suscripción no solo ayuda a mejorar la vida de los animales necesitados, sino que también te brinda un 5%
                de descuento en todas tus compras de productos para mascotas en nuestra tienda en línea.</b><br> Esperamos que
                disfrutes de los beneficios de ser un miembro de Purrfect PetShop y agradecemos tu apoyo en nuestra misión.
              </p>
              <div class="text-center">
                <button class="btn col-10" data-bs-toggle="modal" data-bs-target="#unsubModal"
                  data-bs-whatever="test">Anular Subsripcion</button>
              </div>`;
          } else {
            html = `
              <h4>Subscripción</h4>
              <p>
                Estado: <b>No Suscrito</b><br>
                ¡Únete a nuestro programa de suscripción para ayudar a las
                mascotas necesitadas y obtener un descuento en tus compras! Con tu
                subscripción, estarás apoyando a nuestra fundación sin fines de
                lucro que se dedica a rescatar y cuidar a los animales más
                necesitados.<br>
                <b>
                Además, como miembro, recibirás un 5% de descuento en todas tus
                compras de productos para mascotas en nuestra tienda en línea.
                </b>
              </p>
              <div class="text-center">
                <button class="btn col-10" data-bs-toggle="modal" data-bs-target="#subModal"
                  data-bs-whatever="test">Suscribirse</button>
              </div>`;
          }
          $("#sub-info").append(html);
        }
      } else {
        html = `
        <p class="m-0">
            Inicia sesión o regístrate para recibir promociones exclusivas.
            ¡Únete a nuestra comunidad de amantes de las mascotas!
        </p>
        <li>
            <hr class="dropdown-divider" />
        </li>
        <button class="btn dropdown-btn" onclick="document.location='login.html'">
            Iniciar Sesión          
        </button>`;
        $("#user-info").append(html);
      }
    }
  } else {
    alert("Error cargando información de los usuarios");
  }
});
