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
  mostrarCarritoContenido();
}

function actualizarCarritoHeader() {
  const carritoTotal = document.getElementById("carrito-total");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });

  carritoTotal.textContent = `$${total}`;
}

function eliminarDelCarrito(id) {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "El producto será eliminado del carrito",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito = carrito.filter((producto) => producto.id !== id);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarritoHeader();
      mostrarCarritoContenido();

      Swal.fire(
        "Eliminado",
        "El producto ha sido eliminado del carrito",
        "success"
      );
    }
  });
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

  const botonesEliminar = document.getElementsByClassName("eliminar-producto");
  for (let i = 0; i < botonesEliminar.length; i++) {
    botonesEliminar[i].addEventListener("click", (event) => {
      const productoId = event.target.dataset.id;
      eliminarDelCarrito(productoId);
    });
  }
}

mostrarCarritoContenido();
