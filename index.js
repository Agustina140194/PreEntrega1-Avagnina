const usuarios = [];

let nombreUsuario = prompt("Ingrese nombre de usuario");

if (nombreUsuario === "") {
  alert("Registrate aca");
  let email = prompt("Escriba su email");
  let contraseña = prompt("Elija una contraseña");
  alert(
    "Te mandamos un correo a tu email a " + email + " para verificar la cuenta"
  );
} else {
  contraseña = prompt("Contraseña");
  alert("Bienvenido/a " + nombreUsuario.toLocaleUpperCase());
}

let nuevoUsuario = {
  nombreUsuario: nombreUsuario,
  contraseña: contraseña,
};

usuarios.push(nuevoUsuario);

console.log(usuarios);

let banco = prompt("Ingresa tu banco");
for (let cantidadCuotas = 2; cantidadCuotas <= 6; cantidadCuotas++) {
  if (banco === "Galicia" || banco === "galicia") {
    alert("Tenes hasta 12 cuotas sin interes");
    break;
  } else if (banco === "Santander" || banco === "santander") {
    alert("Tenes hasta 6 cuotas sin interes");
    break;
  } else {
    let resultado = cantidadCuotas * 4;
    alert(
      "En " + cantidadCuotas + " cuotas, el recargo es de: " + resultado + "%"
    );
  }
}

let costosEnvios = [
  { barrio: "Recoleta", envio: 300 },
  { barrio: "Palermo", envio: 350 },
  { barrio: "Colegiales", envio: 400 },
  { barrio: "Belgrano", envio: 450 },
  { barrio: "Retiro", envio: 500 },
  { barrio: "Saavedra", envio: 550 },
];

let barrio = prompt("Ingrese el barrio ");

while (barrio !== "ESC") {
  let encontrado = costosEnvios.find(function (elemento) {
    return elemento.barrio === barrio;
  });

  if (encontrado) {
    alert("El costo de envio es de $" + encontrado.envio);
  } else {
    alert("Estamos trabajando para enviar a tu zona");
  }
  barrio = prompt("Ingrese otro barrio");
}

alert("Datos para el envio");
do {
  nombreApellido = prompt("Ingresa tu nombre y apellido completo: ");
  documento = Number(prompt("Ingresa tu numero de documento"));
  direccion = prompt("Ingresa tu direccion");
  cp = Number(prompt("Codigo postal"));
  esc = prompt("Escriba ESC para finalizar");
} while (esc !== "ESC");

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  sumarIva() {
    this.precio = this.precio * 1.21;
  }
  descuento() {
    this.precio = this.precio * 0.8;
  }
  vender() {
    this.vendido = true;
  }
}

const productos = [
  new Producto("Zapatilla de cuero", 5000),
  new Producto("Zapatilla de tela", 4000),
  new Producto("Sandalia", 3000),
  new Producto("Bota", 8000),
  new Producto("Ojota", 2000),
];

const zapas = productos.filter((producto) =>
  producto.nombre.includes("Zapatilla")
);
console.log(zapas);

let productoElegido = prompt("Que producto estas buscando?");
let productoEncontrado = productos.find(
  (producto) => producto.nombre === productoElegido
);
if (productoEncontrado) {
  console.log(productoEncontrado);
} else {
  console.log("El producto no se encontro");
}

const listaProductos = [];
const cantidad = Number(
  prompt("Ingrese cuantos productos vas a agregar al carrito")
);
for (let index = 0; index < cantidad; index++) {
  let entrada = prompt("Ingrese un producto para agregar al carrito");
  if (entrada === "ESC") {
    break;
  }
  listaProductos.push(entrada);
}

alert("Usted agrego " + listaProductos.join("-") + " al carrito");
