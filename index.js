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

let barrio = prompt("Ingrese su barrio");
while (barrio !== "") {
  switch (barrio) {
    case "Recoleta":
      alert("El costo de envio es de $300");
      break;
    case "Palermo":
      alert("El costo de envio es de $350");
      break;
    case "Colegiales":
      alert("El costo de envio es de $400");
      break;
    case "Belgrano":
      alert("El costo de envio es de $450");
      break;
    case "Nuñez":
      alert("El costo de envio es de $500");
      break;
    case "Villa Urquiza":
      alert("El costo de envio es de $550");
      break;
    case "Saavedra":
      alert("El costo de envio es de $600");
      break;

    default:
      alert("Estamos trabajando para enviar a tu zona");
      break;
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

class Usuario {
  constructor(nombre, apellido, email, contraseña) {
    (this.nombre = nombre.toUpperCase()),
      (this.apellido = apellido.toUpperCase()),
      (this.email = email),
      (this.contraseña = contraseña);
  }
  hablar() {
    console.log("HOLA " + this.nombre + " " + this.apellido);
  }
}

const usuario1 = new Usuario(
  "Agustina",
  "Avagnina",
  "avag@gmail.com",
  "avagagus1234"
);

const usuario2 = new Usuario(
  "Ezequiel",
  "Gonzalez",
  "ezegonz@gmail.com",
  "gonzalez1234"
);

usuario1.hablar();
usuario2.hablar();

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

const producto1 = new Producto("Zapatillas", 5000);
const producto2 = new Producto("Sandalias", 2000);
const producto3 = new Producto("Botas", 8000);

producto1.sumarIva();
producto2.sumarIva();
producto3.descuento();
producto3.vender();

console.log(producto3);

const listaProductos = [];
const cantidad = Number(
  prompt("Ingrese cuantos productos vas a agregar al carrito")
);
for (index = 0; index < cantidad; index++) {
  do {
    let entrada = prompt("Ingrese un producto para agregar al carrito");
    listaProductos.push(entrada);
  } while (listaProductos == !"");

  alert("Usted agrego " + listaProductos.join("-") + " al carrito");
}