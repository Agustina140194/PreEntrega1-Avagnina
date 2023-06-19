let nombreUsuario = prompt("Ingrese nombre de usuario");
function saludar(nombre) {
  if (nombreUsuario === "") {
    alert("Registrate aca");
    nombreUsuario = prompt("Escriba su email");
    prompt("Elija una contraseña");
    alert("Te mandamos un correo a tu email para verificar la cuenta");
  } else {
    prompt("Contraseña");
    alert("Bienvenido/a " + nombreUsuario);
  }
}
saludar(nombreUsuario);

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

function sumar(zapatillas, sandalias) {
  alert("Agregaste zapatillas al carrito: $" + zapatillas);
  alert("Agregaste sandalias al carrito: $" + sandalias);
  let resultado = zapatillas + sandalias;
  alert("Usted debe abonar: $" + resultado);
}
sumar(5000, 3000);
