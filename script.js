let carrito = [];
let totalCarrito = 0;
let carritoTimeout;

function mostrarDetalle(producto, precio) {
  var ventana = document.getElementById('ventana');
  var contenido = document.getElementById('productoSeleccionado');
  var precioElement = document.getElementById('precioProducto');
  contenido.innerText = 'Has seleccionado: ' + producto;
  precioElement.innerText = 'Precio: $' + precio;
  ventana.style.display = 'block';
  // Ocultar la ventana después de 10 segundos
  clearTimeout(carritoTimeout);
  carritoTimeout = setTimeout(ocultarVentana, 10000);
}

function ocultarVentana() {
  var ventana = document.getElementById('ventana');
  ventana.style.display = 'none';
}

function agregarAlCarrito() {
  // Obtener el producto seleccionado y su precio
  var productoSeleccionado = document.getElementById('productoSeleccionado').innerText;
  var precioProducto = parseInt(document.getElementById('precioProducto').innerText.match(/\d+/)[0]);

  // Añadir el producto al carrito
  carrito.push({ producto: productoSeleccionado, precio: precioProducto });

  // Actualizar la visualización del carrito
  mostrarCarrito();
}

function mostrarCarrito() {
  var listaCarrito = document.getElementById('listaCarrito');
  var totalCarritoElement = document.getElementById('totalCarrito');
  var carritoCantidad = document.getElementById('carrito-cantidad');

  listaCarrito.innerHTML = '';  // Limpiar el contenido anterior del carrito
  totalCarrito = 0;

  for (var i = 0; i < carrito.length; i++) {
    var itemCarrito = document.createElement('li');
    itemCarrito.innerHTML = carrito[i].producto + ' - $' + carrito[i].precio + ' <button onclick="eliminarDelCarrito(' + i + ')">Eliminar</button>';
    listaCarrito.appendChild(itemCarrito);
    totalCarrito += carrito[i].precio;
  }

  // Mostrar la cantidad de elementos en el carrito
  carritoCantidad.innerText = carrito.length;

  // Mostrar el total en el carrito
  totalCarritoElement.innerText = totalCarrito;

  // Mostrar el carrito
  var carritoDiv = document.getElementById('carrito');
  carritoDiv.style.display = 'block';

  // Reiniciar el temporizador para ocultar la ventana después de 10 segundos
  clearTimeout(carritoTimeout);
  carritoTimeout = setTimeout(ocultarCarrito, 2000);
}

function ocultarCarrito() {
  var carritoDiv = document.getElementById('carrito');
  carritoDiv.style.display = 'none';
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}


function mostrarDetalle(producto, precio) {
  var ventana = document.getElementById('ventana');
  var contenido = document.getElementById('productoSeleccionado');
  var precioElement = document.getElementById('precioProducto');
  contenido.innerText = 'Has seleccionado: ' + producto;
  precioElement.innerText = 'Precio: $' + precio;
  ventana.style.display = 'block';

  // Ocultar la ventana después de 10 segundos
  clearTimeout(carritoTimeout);
  carritoTimeout = setTimeout(ocultarVentana, 10000);
}

// Resto del código...

function ocultarVentana() {
  var ventana = document.getElementById('ventana');
  ventana.style.display = 'none';
}