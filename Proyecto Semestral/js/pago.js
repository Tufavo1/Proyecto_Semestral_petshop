$(document).ready(function () {
  if (typeof Storage !== "undefined") {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    carrito = JSON.parse(localStorage.getItem("carrito"));
    let subtotalIva = 0;
    let descuento = 0;
    carrito.forEach((producto) => {
      subtotalIva += producto.precio * producto.cantidad;
      let html = `
        <tr>
            <td><img src="${producto.imagen}" class="table-img"></td>
            <td>${producto.nombre} (${producto.peso})</td>
            <td class="precio">${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td class="precio">${producto.precio * producto.cantidad}</td>
        </tr>`;
      $("#carrito").append(html);
    });
    let subtotal = (subtotalIva * 100) / 119;
    let iva = subtotal * 0.19;
    $("#subtotal").text(Math.round(subtotal));
    $("#iva").text(Math.round(iva));
    $("#subtotalIva").text(subtotalIva);
    usuarios.map((usuario) => {
      if (usuario.logged && usuario.subscription) {
        descuento = Math.round(subtotalIva * 0.05);
      }
    });
    $("#desc").text(descuento);
    $("#total").text(subtotalIva - descuento);
    $("#pagar-form").validate({
      rules: {
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
        window.location.replace("success.html");
      },
    });
  } else {
    alert("El Storage no está disponible en este navegador");
  }
});
