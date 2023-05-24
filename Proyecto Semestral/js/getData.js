// Creación de Productos
$(document).ready(function () {
  if (typeof Storage !== "undefined") {
    //localStorage.removeItem('productos');
    let productos = JSON.parse(localStorage.getItem("productos"));
    if (productos === null) {
      productos = [];
      productos.push(
        {
          id: 1001,
          nombre: "Royal Canin Alimento Seco Perro Adulto Hepatic",
          marca: "Royal Canin",
          categoria: "Alimentos",
          animal: "Perros",
          stock: 50,
          precio: 78200,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw4355ac4c/images/bd4ec-rc-vet-dry-doggastrohep-mv-brandflagship.jpg",
        },
        {
          id: 1002,
          nombre:
            "Proplan Adulto Razas Medianas (Ex Complete) alimento para perro",
          marca: "Proplan",
          categoria: "Alimentos",
          animal: "Perros",
          stock: 25,
          precio: 63920,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwa593e644/images/223e9-adulto-raza-mediana.jpg",
        },
        {
          id: 1003,
          nombre: "Zeedog Collar Honey",
          marca: "Zeedog",
          categoria: "Accesorios",
          animal: "Perros",
          stock: 80,
          precio: 8000,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwc84f7bd2/images/aaa5b-honey-collar.jpg",
        },
        {
          id: 1004,
          nombre: "Transportador Con Ruedas",
          marca: "Mpets",
          categoria: "Accesorios",
          animal: "Perros",
          stock: 20,
          precio: 105000,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwfeb8c12d/images/85507-transport-box-dog-box-trek-travel-carrier-m-incl-4-wheels-71-x-52-x-55-cm.jpg",
        },
        {
          id: 1005,
          nombre: "Simparica 80 Mg Antiparasitario Oral Antiparasitarios",
          marca: "Zoetis",
          categoria: "Farmacia",
          animal: "Perros",
          stock: 100,
          precio: 12495,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw6ebfe4b4/images/3859c-80mg.jpg",
        },
        {
          id: 1006,
          nombre: "Poo 100% bolsas compostable 60 unid verdes",
          marca: "Mpets",
          categoria: "Farmacia",
          animal: "Perros",
          stock: 200,
          precio: 6990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw0817b47e/images/e3d70-sin-titulo.jpg",
        },
        {
          id: 1007,
          nombre: "Kong Corestrenght Hueso",
          marca: "Kong",
          categoria: "Juguetes",
          animal: "Perros",
          stock: 150,
          precio: 10990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw13f8da6f/images/1d3be-pfc11-3-.jpg",
        },
        {
          id: 1008,
          nombre: "Kong Classic",
          marca: "Kong",
          categoria: "Juguetes",
          animal: "Perros",
          stock: 200,
          precio: 7990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwf0321f65/images/4bffd-t1-7-.jpg",
        },
        {
          id: 1009,
          nombre: "Fit Formula Gato Adulto alimento para gato",
          marca: "Fit Formula",
          categoria: "Alimentos",
          animal: "Gatos",
          stock: 100,
          precio: 29990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw5fa1505f/images/4969e-gato-10-web.jpg",
        },
        {
          id: 1010,
          nombre: "Churu de atun con salmon 56 GR",
          marca: "Inaba",
          categoria: "Alimentos",
          animal: "Gatos",
          stock: 500,
          precio: 2990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw13d0804b/images/1b92e-ciao-churu-atun-con-salmon.jpg",
        },
        {
          id: 1011,
          nombre: "Filtros fuente bebedera flower - flor pack 2 unidades",
          marca: "Catit",
          categoria: "Accesorios",
          animal: "Gatos",
          stock: 80,
          precio: 8990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwf27b2ac5/images/2d9a9-filtro-catit-triple-accion.png",
        },
        {
          id: 1012,
          nombre:
            "Mpets puerta para gatos - 4 vías //: 174 x 164 mm blanco 174 x 164 mm blanco",
          marca: "Mpets",
          categoria: "Accesorios",
          animal: "Gatos",
          stock: 160,
          precio: 6000,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw02f4c457/images/4f33c-m-pets_doras_cat_door_4_way_locking_20800001.jpg",
        },
        {
          id: 1013,
          nombre: "Arena para gatos Aglomerante",
          marca: "Tk Pet",
          categoria: "Farmacia",
          animal: "Gatos",
          stock: 300,
          precio: 16990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw38c81c15/images/ARENA%20AGLOMERANTE.jpg",
        },
        {
          id: 1014,
          nombre: "Shampoo neutro gato 260 cc",
          marca: "Traper",
          categoria: "Farmacia",
          animal: "Gatos",
          stock: 250,
          precio: 5990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw893a9231/images/7bd9f-neutro-gato-1.jpg",
        },
        {
          id: 1015,
          nombre: "Kong laser toy - cat",
          marca: "Kong",
          categoria: "Juguetes",
          animal: "Gatos",
          stock: 200,
          precio: 5990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwd27c5d43/images/9915d-cl4-2-.jpg",
        },
        {
          id: 1016,
          nombre: "Ratón con lunares",
          marca: "The Cat Band",
          categoria: "Juguetes",
          animal: "Gatos",
          stock: 250,
          precio: 2990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw7bf44452/images/2454a-8436569704141.1-2-.jpg",
        },
        {
          id: 1017,
          nombre: "Large bird diet 1.36 KG",
          marca: "Mazuri",
          categoria: "Alimentos",
          animal: "Aves",
          stock: 160,
          precio: 26990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw495fba81/images/f073a2f5-b554-4541-bb15-c4e1691f33fe.jpg",
        },
        {
          id: 1018,
          nombre:
            "Tropican alimento para aves con formula crianza 400GR 400 GR",
          marca: "Tropican",
          categoria: "Alimentos",
          animal: "Aves",
          stock: 200,
          precio: 11990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw709fc892/images/d7679-b22591.jpg",
        },
        {
          id: 1019,
          nombre: "Multivitamínico ferti-vit 25 GR",
          marca: "Versele Laga",
          categoria: "Farmacia",
          animal: "Aves",
          stock: 50,
          precio: 7000,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw2ad418a6/images/839e8-4602051.jpg",
        },
        {
          id: 1020,
          nombre: "Nutrafin Max Alimento Peces Agua Fria Escama",
          marca: "Nutrafin",
          categoria: "Alimentos",
          animal: "Acuáticos",
          stock: 150,
          precio: 12990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw4f316c76/images/a4040-nutrafin-max-alimento-peces-de-agua-fria-215-grs1.jpg",
        },
        {
          id: 1021,
          nombre: "Nutrafin Basix Alimento Para Peces",
          marca: "Nutrafin",
          categoria: "Alimentos",
          animal: "Acuáticos",
          stock: 200,
          precio: 2490,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw9e9efe9b/images/30df7-alimento-vacaciones-7-dias-nutrafin-basix1.jpg",
        },
        {
          id: 1022,
          nombre: "Fluval Kit Acuario Flex",
          marca: "Fluval",
          categoria: "Accesorios",
          animal: "Acuáticos",
          stock: 20,
          precio: 199990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw10616567/images/c01d1-15004_11.jpg",
        },
        {
          id: 1023,
          nombre: "Fluval acuario chi con cubierta 19 litros",
          marca: "Fluval",
          categoria: "Accesorios",
          animal: "Acuáticos",
          stock: 50,
          precio: 159990,
          imagen:
            "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw616f6afc/images/a4002-10505_11.jpg",
        }
      );
      localStorage.setItem("productos", JSON.stringify(productos));
    }
    const fileName = document.location.pathname.match(/[^\/]+$/)[0];
    let animalPage;
    switch(fileName) {
      case "index.html":
        animalPage = true;
        break;
      case "caninos.html":
        animalPage = "Perros";
        break;
      case "mininos.html":
        animalPage = "Gatos";
        break;
      case "alados.html":
        animalPage = "Aves";
        break;
      case "acuaticos.html":
        animalPage = "Acuáticos";
        break;
    }
    productos.forEach((producto) => {
      if (producto.stock > 0 && (animalPage === true || producto.animal === animalPage)) {
        let html = `
        <div class="col-4">
          <div class="card">
            <div class="card-body front">
              <div class="img-container">
                <div class="img-border">
                  <img src="${producto.imagen}" class="card-img-top" />
                </div>
              </div>
              <h3 class="id-prod">${producto.id}</h3>
              <h3 class="card-title">${producto.nombre}</h3>
              <div class="row">
                <div class="col-6 text-end">Precio:</div>
                <div class="col-6 bold precio">${producto.precio}</div>
              </div>
              <div class="row">
                <div class="col-6 text-end">Marca:</div>
                <div class="col-6 bold marca">${producto.marca}</div>
              </div>
              <div class="row">
                <div class="col-6 text-end">Stock Disponible:</div>
                <div class="col-6 bold stock">${producto.stock}</div>
              </div>
              <div class="row">
                <div class="col-6 text-end">Categoría:</div>
                <div class="col-6 bold categoria">${producto.categoria}</div>
              </div>
              <div class="row">
                <div class="col-6 text-end">Animal:</div>
                <div class="col-6 bold">${producto.animal}</div>
              </div>
              <div class="row">
                <div class="col-6 text-end">Seleccionar Peso:</div>
                <div class="col-6 bold form-group">
                  <select class="form-select" id="kg-select">
                    <option value="9KG" selected>9 KG</option>
                    <option value="15KG">15 kG</option>
                    <option value="18KG">18 KG</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-6 text-end">Cantidad:</div>
                <div class="col-6 bold container-add-cart">
                  <div class="container-quantity">
                    <input
                      type="number"
                      id="contador"
                      placeholder="1"
                      value="1"
                      min="1"
                      max="${producto.stock}"
                      class="input-quantity"
                      readonly
                    />
                  </div>
                  <div class="btn-increment-decrement">
                    <i class="bi bi-chevron-compact-up"></i>
                    <i class="bi bi-chevron-compact-down"></i>
                  </div>
                </div>
              </div>
                <div class="col-12 mt-2 text-center">
                <a class="agregar-carrito btn">Añadir al carrito</a>
                <button class="btn-reseñas btn">Opiniones</button>
                </div>
            </div>
            <div class="card-body back" style="display: none;">
                <div class="img-container">
                  <div class="img-border">
                    <img src="${producto.imagen}" class="card-img-top" />
                  </div>
                </div>
                <h3 class="card-title">${producto.nombre}</h3>
                <h4>Califica el Producto</h4>
                <div class="calificacion-mensaje"></div>
                <div class="evaluacion">
                  <i class="fas fa-star" data-mensaje="No es muy bueno"></i>
                  <i class="fas fa-star" data-mensaje="Poco probable"></i>
                  <i class="fas fa-star" data-mensaje="Puede mejorar"></i>
                  <i class="fas fa-star" data-mensaje="Muy probable"></i>
                  <i class="fas fa-star" data-mensaje="Producto muy satisfecho"></i>
                </div>
                  <div class="reseñas">
                    <h4>Opiniones Sobre el Producto</h4>
                    <ul class="historial-reseñas"></ul>
                    <textarea class="input-reseña" placeholder="cuentanos Tu Experiencia"></textarea>
                    <button class="btn-agregar-reseña btn">Agregar reseña</button>
                    <div class="reseñas eliminar-historial-container">
                      <button id="btn-eliminar-historial" class="btn btn-danger">Eliminar Historial</button>
                    </div>
                  </div>
                  <button class="btn-volver btn">Volver</button>
                </div>
            </div>
          </div>
      </div>`;
        $(".productos").children().append(html);
      }
    });
    let contadorCategoria = 0;
    const categorias = [
      ...new Set(productos.map((producto) => producto.categoria)),
    ];
    categorias.forEach((categoria) => {
      contadorCategoria++;
      $("#filtroCategoria").append(
        `<option value="${contadorCategoria}">${categoria}</option>`
      );
    });
    let contadorMarca = 0;
    const marcas = [
      ...new Set(productos.map((producto) => producto.marca)),
    ];
    marcas.forEach((marca) => {
      contadorMarca++;
      $("#filtroMarca").append(
        `<option value="${contadorMarca}">${marca}</option>`
      );
    });
  } else {
    alert("Error cargando los productos");
  }
  /*.card-back osea tarjeta trasera */
  $(".productos").on("click", ".btn-reseñas", function () {
    $(this).closest(".card").find(".front").hide();
    $(this).closest(".card").find(".back").show();
  });
  
  // le asigne un evento on click al boton volver 
  $(".productos").on("click", ".btn-volver", function () {
    $(this).closest(".card").find(".back").hide();
    $(this).closest(".card").find(".front").show();
  });
    // le asigne un evento on click al boton reseñas y evaluaciones 
  $(".productos").on("click", ".btn-reseñas", function () {
    var card = $(this).closest(".card");
    card.addClass("flip");
  });

  // le asigne un evento on click para al momento de hacer click al boton reseñas y evaluaciones se vaya a la parte trasera o back 
  $(".productos").on("click", ".btn-reseñas", function () {
    var card = $(this).closest(".card");
    card.addClass("flip");
  });

  // le asigne un evento on click para al momento de hacer click al boton volver se vaya a la parte frontal o front 
  $(".productos").on("click", ".btn-volver", function () {
    var card = $(this).closest(".card");
    card.removeClass("flip");
  });

  $(".productos").on("click", ".btn-agregar-reseña", function () {
    var reseña = $(this).siblings(".input-reseña").val();
    var historialReseñas = $(this).siblings(".historial-reseñas");
    
    if (reseña) {
      var productoId = $(this).closest(".card").data("id");
      var reseñasGuardadas = localStorage.getItem(`reseñas_${productoId}`);
      var reseñas = reseñasGuardadas ? JSON.parse(reseñasGuardadas) : [];
      
      reseñas.push(reseña);
      localStorage.setItem(`reseñas_${productoId}`, JSON.stringify(reseñas));
      
      historialReseñas.append(`<li>${reseña}</li>`);
      
      $(this).siblings(".input-reseña").val("");
    }
  });
  
  $(".productos .card").each(function () {
    var card = $(this);
    var productoId = card.data("id");
    var reseñasGuardadas = localStorage.getItem(`reseñas_${productoId}`);
    
    if (reseñasGuardadas) {
      var reseñas = JSON.parse(reseñasGuardadas);
      var historialReseñas = card.find(".historial-reseñas");
      
      historialReseñas.empty();
      
      reseñas.forEach(function(reseña) {
        historialReseñas.append(`<li>${reseña}</li>`);
      });
    }
  });
  /*calificacion funciones y mensajes*/
  function cambiarCalificacion(card, calificacion) {
    var iconos = card.find(".evaluacion i");
    iconos.each(function (index) {
      var mensaje = $(this).data("mensaje");
      $(this).toggleClass("fas", index < calificacion).toggleClass("far", index >= calificacion);
    });
    mostrarMensaje(calificacion);
  }
  
  function mostrarMensaje(calificacion) {
    var mensajes = {
      1: "No es muy bueno",
      2: "Poco probable",
      3: "Puede mejorar",
      4: "Muy probable",
      5: "Producto muy satisfecho"
    };
    var mensaje = mensajes[calificacion];
    var mensajeElement = $(".calificacion-mensaje");
    mensajeElement.text(mensaje).fadeIn();
    setTimeout(function () {
      mensajeElement.fadeOut();
    }, 5000);
  }
  
  $(".productos").on("click", ".evaluacion i", function () {
    var card = $(this).closest(".card");
    var calificacion = $(this).index() + 1;
    cambiarCalificacion(card, calificacion);
  
    var productoId = card.data("id");
    localStorage.setItem(`calificacion_${productoId}`, calificacion);
  });
  
  $(".productos .card").each(function () {
    var card = $(this);
    var productoId = card.data("id");
    var calificacion = localStorage.getItem(`calificacion_${productoId}`);
    if (calificacion) {
      cambiarCalificacion(card, calificacion);
    }
  });
  /*boton eliminar historial */
  $(".productos").on("click", "#btn-eliminar-historial", function() {
    var card = $(this).closest(".card");
    var historialReseñas = card.find(".historial-reseñas");
    historialReseñas.empty();
    var productoId = card.data("id");
    localStorage.removeItem(`reseñas_${productoId}`);
  });  
});
