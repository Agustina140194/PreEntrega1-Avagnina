let nombreUsuario = prompt("Ingrese nombre de usuario");
if (nombreUsuario === "") {
  alert("Registrate aca");
  nombreUsuario = prompt("Escriba su email");
  prompt("Elija una contraseña");
  alert("Te mandamos un correo a tu email para verificar la cuenta");
} else {
  prompt("Contraseña");
  alert("Bienvenido/a " + nombreUsuario);
}

let banco = prompt("Ingresa tu banco");
for (let cantidadCuotas = 2; cantidadCuotas <= 6; cantidadCuotas++) {
  if (banco === "Galicia") {
    alert("Tenes hasta 12 cuotas sin interes");
    break;
  }
  let resultado = cantidadCuotas * 4;
  alert(
    "En " + cantidadCuotas + " cuotas, el recargo es de: " + resultado + "%"
  );
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
