$(document).ready(function () {
  if (typeof Storage !== "undefined") {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    let productos = JSON.parse(localStorage.getItem("productos"));
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let loggedIn = usuarios.find((usuario) => usuario.logged === true);
    $("#nombre").text(loggedIn.nombre);
    let date = new Date()
    $("#fecha").text(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear());
    $("#direccion").text(loggedIn.direccion);
    let total = 0;
    carrito.forEach(carrito => {
        $("#productos").append("· " + carrito.nombre + " x" + carrito.cantidad + "<br/>");
        total += carrito.precio * carrito.cantidad;
        productos = productos.map((producto) => {
          if (producto.id == carrito.id) {
            producto.stock -= carrito.cantidad;
          }
          return producto;
        });
        localStorage.setItem("productos", JSON.stringify(productos));
    });
    $("#total").text("$"+total);
    localStorage.removeItem("carrito");
    $("#btn-inicio").on("click", function() {
        window.location.replace("index.html");
    });
  } else {
    alert("El Storage no está disponible");
  }
});
