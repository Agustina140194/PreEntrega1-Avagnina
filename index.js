const productos = [
  { id: "producto1", nombre: "Camelia", precio: 5000 },
  { id: "producto2", nombre: "Bugalo", precio: 7000 },
  { id: "producto3", nombre: "Alamo", precio: 6000 },
  { id: "producto4", nombre: "Verbena", precio: 4000 },
];

const botonesAgregar = document.getElementsByClassName("agregar-carrito");
for (let i = 0; i < botonesAgregar.length; i++) {
  botonesAgregar[i].addEventListener("click", (event) => {
    const productoId = event.target.id;
    agregarAlCarrito(productoId);
  });
}

function agregarAlCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const productoExistente = carrito.find((producto) => producto.id === id);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    const producto = productos.find((prod) => prod.id === id);
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarritoHeader();
}

function actualizarCarritoHeader() {
  const carritoTotal = document.getElementById("carrito-total");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });

  carritoTotal.textContent = `$${total}`;

  mostrarCarritoContenido();
}

function mostrarCarritoContenido() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoContenido = document.getElementById("carrito-contenido");
  let carritoHTML = "";

  carrito.forEach((producto) => {
    const subtotal = producto.precio * producto.cantidad;
    carritoHTML += `
      <div>
        <span>${producto.nombre} - $${producto.precio} x ${producto.cantidad} = $${subtotal}</span>
        <button class="eliminar-producto" data-id="${producto.id}">Eliminar</button>
      </div>
    `;
  });

  carritoContenido.innerHTML = carritoHTML;
}

actualizarCarritoHeader();
