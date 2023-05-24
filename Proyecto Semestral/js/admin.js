$(document).ready(function () {
  if (typeof Storage !== "undefined") {
    let productos = JSON.parse(localStorage.getItem("productos"));
    if (productos === null) {
      alert("No se encontraron productos");
    } else {
      productos.forEach((producto) => {
        let html = `
            <tr type="a" data-bs-toggle="modal" data-bs-target="#productoModal" class="editProducto">
                <th class="celdaId" scope="row">${producto.id}</th>
                <td class="celdaImagen"><img src="${producto.imagen}" class="table-img"></td>
                <td class="celdaProducto">${producto.nombre}</td>
                <td class="celdaMarca">${producto.marca}</td>
                <td class="celdaCategoria">${producto.categoria}</td>
                <td class="celdaAnimal">${producto.animal}</td>
                <td class="celdaPrecio">${producto.precio}</td>
                <td class="celdaStock">${producto.stock}</td>
            </tr>`;
        $(".listaProductos").append(html);
      });
    }

    let contadorAnimal = 0;
    const animales = [...new Set(productos.map((producto) => producto.animal))];
    animales.forEach((animal) => {
      contadorAnimal++;
      $(".animal-combobox").append(
        `<option value="${contadorAnimal}">${animal}</option>`
      );
    });

    let contadorCategoria = 0;
    const categorias = [
      ...new Set(productos.map((producto) => producto.categoria)),
    ];
    categorias.forEach((categoria) => {
      contadorCategoria++;
      $(".categoria-combobox").append(
        `<option value="${contadorCategoria}">${categoria}</option>`
      );
    });

    let row;
    $(".editProducto").on("click", function () {
      row = $(this);
      $("#id-producto").val($(this).children(".celdaId").text());
      $("#marca-producto").val($(this).children(".celdaMarca").text());
      $("#nombre-producto").val($(this).children(".celdaProducto").text());
      $("#precio-producto").val($(this).children(".celdaPrecio").text());
      $("#stock-producto").val($(this).children(".celdaStock").text());
      let valAnimal =
        animales.indexOf($(this).children(".celdaAnimal").text()) + 1;
      $("#animal-producto option[value='" + valAnimal + "']").prop(
        "selected",
        true
      );
      let valCategoria =
        categorias.indexOf($(this).children(".celdaCategoria").text()) + 1;
      $("#categoria-producto option[value='" + valCategoria + "']").prop(
        "selected",
        true
      );
      $("#imagen-producto").val(
        $(this).children(".celdaImagen").children().attr("src")
      );
    });

    $("#nuevaFicha").validate({
      rules: {
        nuevoNombre: {
          required: true,
        },
        nuevoMarca: {
          required: true,
        },
        nuevoPrecio: {
          required: true,
        },
        nuevoStock: {
          required: true,
        },
        nuevoImagen: {
          required: true,
        },
      },
      messages: {
        nuevoNombre: {
          required: "Debe ingresar un nombre",
        },
        nuevoMarca: {
          required: "Debe ingresar una marca",
        },
        nuevoPrecio: {
          required: "Debe ingresar un precio",
        },
        nuevoStock: {
          required: "Debe ingresar el stock",
        },
        nuevoImagen: {
          required: "Debe ingresar una URL válida",
        },
      },
      submitHandler: function () {
        productos.push({
          id: Math.max(...productos.map((producto) => producto.id)) + 1,
          nombre: $("#nuevo-nombre-producto").val(),
          marca: $("#nuevo-marca-producto").val(),
          categoria: $("#nuevo-categoria-producto").find(":selected").text(),
          animal: $("#nuevo-animal-producto").find(":selected").text(),
          stock: $("#nuevo-stock-producto").val(),
          precio: $("#nuevo-precio-producto").val(),
          imagen: $("#nuevo-imagen-producto").val(),
        });
        localStorage.setItem("productos", JSON.stringify(productos));
        let html = `
        <tr type="a" data-bs-toggle="modal" data-bs-target="#productoModal" class="editProducto">
                  <th class="celdaId" scope="row">${Math.max(
                    ...productos.map((producto) => producto.id)
                  )}</th>
                  <td class="celdaImagen"><img src="${$(
                    "#nuevo-imagen-producto"
                  ).val()}" class="table-img"></td>
                  <td class="celdaProducto">${$(
                    "#nuevo-nombre-producto"
                  ).val()}</td>
                  <td class="celdaMarca">${$(
                    "#nuevo-marca-producto"
                  ).val()}</td>
                  <td class="celdaCategoria">${$("#nuevo-categoria-producto")
                    .find(":selected")
                    .text()}</td>
                  <td class="celdaAnimal">${$("#nuevo-animal-producto")
                    .find(":selected")
                    .text()}</td>
                  <td class="celdaPrecio">${$(
                    "#nuevo-precio-producto"
                  ).val()}</td>
                  <td class="celdaStock">${$(
                    "#nuevo-stock-producto"
                  ).val()}</td>
                  </tr>`;
        $(".listaProductos").append(html);
        $("#nuevoModal").modal("hide");
        alert("Producto agregado exitosamente");
      },
    });

    $("#fichaProducto").validate({
      rules: {
        nombreProducto: {
          required: true,
        },
        marcaProducto: {
          required: true,
        },
        precioProducto: {
          required: true,
        },
        stockProducto: {
          required: true,
        },
        imagenProducto: {
          required: true,
        },
      },
      messages: {
        nombreProducto: {
          required: "Debe ingresar un nombre",
        },
        marcaProducto: {
          required: "Debe ingresar una marca",
        },
        precioProducto: {
          required: "Debe ingresar un precio",
        },
        stockProducto: {
          required: "Debe ingresar el stock",
        },
        imagenProducto: {
          required: "Debe ingresar una URL válida",
        },
      },
      submitHandler: function () {
        productos = productos.map((producto) => {
          if (producto.id == $("#id-producto").val()) {
            producto.marca = $("#marca-producto").val();
            producto.nombre = $("#nombre-producto").val();
            producto.precio = $("#precio-producto").val();
            producto.stock = $("#stock-producto").val();
            producto.animal = $("#animal-producto").find(":selected").text();
            producto.categoria = $("#categoria-producto")
              .find(":selected")
              .text();
            producto.imagen = $("#imagen-producto").val();
          }
          return producto;
        });
        localStorage.setItem("productos", JSON.stringify(productos));
        let html = `
                  <th class="celdaId" scope="row">${$(
                    "#id-producto"
                  ).val()}</th>
                  <td class="celdaImagen"><img src="${$(
                    "#imagen-producto"
                  ).val()}" class="table-img"></td>
                  <td class="celdaProducto">${$("#nombre-producto").val()}</td>
                  <td class="celdaMarca">${$("#marca-producto").val()}</td>
                  <td class="celdaCategoria">${$("#categoria-producto")
                    .find(":selected")
                    .text()}</td>
                  <td class="celdaAnimal">${$("#animal-producto")
                    .find(":selected")
                    .text()}</td>
                  <td class="celdaPrecio">${$("#precio-producto").val()}</td>
                  <td class="celdaStock">${$("#stock-producto").val()}</td>`;
        row.html(html);
        $("#productoModal").modal("hide");
        alert("Producto editado exitosamente");
      },
    });

    $("#btn-eliminar").on("click", function () {
      productos = productos.filter(
        (producto) => producto.id != $("#id-producto").val()
      );
      localStorage.setItem("productos", JSON.stringify(productos));
      row.remove();
      $("#productoModal").modal("hide");
      alert("Producto eliminado exitosamente");
    });
  } else {
    alert("Error cargando los productos");
  }
});
