$(document).ready(function () {
  if (typeof Storage !== "undefined") {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    let loggedIn = usuarios.find((usuario) => usuario.logged === true);
    if (loggedIn !== undefined) {
      window.location.replace("index.html");
    } else {
      let active = ".login";
      let hidden = ".register";
      $("#switch").on("change", function () {
        $("#switch").prop("disabled", true);
        $(active).fadeToggle(300);
        setTimeout(function () {
          $(hidden).fadeToggle(300);
          $("#switch").prop("disabled", false);
          let temp = active;
          active = hidden;
          hidden = temp;
        }, 300);
      });

      $("#login").validate({
        rules: {
          username: {
            required: true,
          },
          password: {
            required: true,
          },
        },
        messages: {
          username: {
            required: "Debe ingresar su username",
          },
          password: {
            required: "Debe ingresar su contraseña",
          },
        },
        submitHandler: function () {
          let found = usuarios.find(
            (usuario) => usuario.username === $("#username").val()
          );
          if (found !== undefined) {
            if (found.password === $("#password").val()) {
              usuarios = usuarios.map((usuario) => {
                if (usuario === found) {
                  usuario.logged = true;
                }
                return usuario;
              });
              localStorage.setItem("usuarios", JSON.stringify(usuarios));
              window.location.replace("index.html");
            } else {
              alert("Usuario o contraseña incorrectos");
            }
          } else {
            alert("Usuario inexistente");
          }
        },
      });
      $("#register").validate({
        rules: {
          rEmail: {
            required: true,
            email: true,
          },
          rNombre: {
            required: true,
          },
          rUsername: {
            required: true,
          },
          rContraseña: {
            required: true,
          },
          rDireccion: {
            required: true,
          },
          rTelefono: {
            required: true,
            digits: true,
            minlength: 9,
            maxlength: 9,
          },
        },
        messages: {
          rEmail: {
            required: "Debe ingresar un email",
            email: "El email no es válido",
          },
          rNombre: {
            required: "Debe ingresar su nombre",
          },
          rUsername: {
            required: "Debe crear un username",
          },
          rContraseña: {
            required: "Debe crear una contraseña",
          },
          rDireccion: {
            required: "Debe ingresar su dirección",
          },
          rTelefono: {
            required: "Debe ingresar su teléfono",
            digits: "Debe ingresar su teléfono",
            minlength: "El número debe tener 9 dígitos",
            maxlength: "El número debe tener 9 dígitos",
          },
        },
        submitHandler: function () {
          let found = usuarios.find(
            (usuario) => usuario.username === $("#rUsername").val()
          );
          if (found === undefined) {
            usuarios.push({
              username: $("#rUsername").val(),
              password: $("#rContraseña").val(),
              email: $("#rEmail").val(),
              nombre: $("#rNombre").val(),
              direccion: $("#rDireccion").val(),
              telefono: $("#rTelefono").val(),
              subscription: false,
              logged: true,
            });
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            alert("Registrado correctamente!");
            window.location.replace("perfil.html");
          } else {
            alert("El nombre de usuario ingresado ya existe");
          }
        },
      });
    }
  } else {
    alert("Error cargando los productos");
  }
});
