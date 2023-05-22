$(document).ready(function () {
  if (typeof Storage !== "undefined") {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    $("#btn-edit").on("click", function () {
      $("#eNombre").val($("#nombre").text());
      $("#eEmail").val($("#email").text());
      $("#eUsername").val($("#username").text());
      $("#ePassword").val($("#password").text());
      $("#eDireccion").val($("#direccion").text());
      $("#eTelefono").val($("#telefono").text());
      $("#eUser").validate({
        rules: {
          eEmail: {
            required: true,
            email: true,
          },
          eNombre: {
            required: true,
          },
          eUsername: {
            required: true,
          },
          ePassword: {
            required: true,
          },
          eDireccion: {
            required: true,
          },
          eTelefono: {
            required: true,
            digits: true,
            minlength: 9,
            maxlength: 9,
          },
        },
        messages: {
          eEmail: {
            required: "Debe ingresar un email",
            email: "El email no es válido",
          },
          eNombre: {
            required: "Debe ingresar su nombre",
          },
          eUsername: {
            required: "Debe crear un username",
          },
          ePassword: {
            required: "Debe ingresar una contraseña",
          },
          eDireccion: {
            required: "Debe ingresar su dirección",
          },
          eTelefono: {
            required: "Debe ingresar su teléfono",
            digits: "Debe ingresar su teléfono",
            minlength: "El número debe tener 9 dígitos",
            maxlength: "El número debe tener 9 dígitos",
          },
        },
        submitHandler: function () {
          usuarios = usuarios.map((usuario) => {
            if (usuario.username == $("#eUsername").val()) {
              usuario.password = $("#ePassword").val();
              usuario.email = $("#eEmail").val();
              usuario.nombre = $("#eNombre").val();
              usuario.direccion = $("#eDireccion").val();
              usuario.telefono = $("#eTelefono").val();
            }
            return usuario;
          });
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
          $("#dropdown-nombre").html(`<i class="fa-solid fa-face-smile"></i>`+$("#eNombre").val());
          $("#nombre").text($("#eNombre").val());
          $("#email").text($("#eEmail").val());
          $("#password").text($("#ePassword").val());
          $("#direccion").text($("#eDireccion").val());
          $("#telefono").text($("#eTelefono").val());
          $("#userDataModal").modal("hide");
          alert("Datos editados exitosamente");
        },
      });
    });
    $("#sub-form").validate({
      rules: {
        donacion: {
          required: true,
          digits: true,
        },
        titular: {
          required: true,
        },
        cardNumber: {
          required: true,
          digits: true,
          minlength: 16,
          maxlength: 16,
        },
        expireDate: {
          required: true,
        },
        cvv: {
          required: true,
          digits: true,
        },
      },
      messages: {
        donacion: {
          required: "Debe ingresar un monto",
          digits: "El monto no es válido",
        },
        titular: {
          required: "Debe ingresar el nombre del titular",
        },
        cardNumber: {
          required: "Debe ingresar el número de tarjeta",
          digits: "El número de tarjeta no es válido",
          minlength: "El número de tarjeta no es válido",
          maxlength: "El número de tarjeta no es válido",
        },
        expireDate: {
          required: "Debe ingresar la fecha de vencimiento",
        },
        cvv: {
          required: "Debe ingresar el CVV",
          digits: "El CVV no es válido",
          min: "El CVV no es válido",
          max: "El CVV no es válido",
        },
      },
      submitHandler: function () {
        usuarios = usuarios.map((usuario) => {
          if (usuario.logged) {
            usuario.subscription = true;
          }
          return usuario;
        });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
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
        $("#dropdown-substate").html(`<i class="fa-solid fa-crown"></i>Suscrito`);
        $("#sub-info").html(html);
        alert("Suscripción existosa!");
        $("#subModal").modal("hide");
      },
    });
    $("#btn-confirm").on("click", function () {
      usuarios = usuarios.map((usuario) => {
        if (usuario.logged) {
          usuario.subscription = false;
        }
        return usuario;
      });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
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
      $("#dropdown-substate").html(`<i class="fa-solid fa-crown"></i>No Suscrito`);
      $("#sub-info").html(html);
      alert("Suscripción anulada");
      $("#unsubModal").modal("hide");
    });
  } else {
    alert("Error cargando información de los usuarios");
  }
});
