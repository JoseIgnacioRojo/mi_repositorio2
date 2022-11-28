/*let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = Number(prompt("Ingrese otro número"));

let operacion = numero1 + numero2;

alert(operacion);

let Nombre = prompt("Ingrese Nombre");

if (Nombre === "") {
  alert("Debe ingresar un nombre");
} else {
  let Apellido = prompt("Ingrese Apellido");

  if (Apellido === "") {
    alert("Debe ingresar un apellido");
  } else {
    let Dni = Number(prompt("Ingrese DNI"));

    if (Dni === 0) {
      alert("DNI no puede ser cero.");
    } else {
      let operacion =
        "Ingresó nombre: " +
        Nombre +
        " con apellido: " +
        Apellido +
        " y con DNI: " +
        Dni;

      alert(operacion);
    }
  }
}
*/

let Articulo = "";
let Cantidad = 0;
let TotalAPagar = 0;
let FormaDePago = "";
let CantidadCuotas = 0;
let ValorCuotas = 0;

function Calculaprecio(PiArticulo, PiCantidad) {
  let Precio = 0;

  switch (PiArticulo) {
    case "raqueta":
      Precio = 2000;
      break;

    case "pelotas":
      Precio = 600;
      break;

    case "remera":
      Precio = 5000;
      break;

    default:
      alert("Precio de artículo desconocido.");
      break;
  }
  return Precio * PiCantidad;
}

function CalculaCuotas(PiTotalAPagar, PiCantidadCuotas) {
  let TasaInteres = 0;
  switch (PiCantidadCuotas) {
    case "6":
      TasaInteres = 30;
      break;
    case "12":
      TasaInteres = 60;
      break;
    case "18":
      TasaInteres = 90;
      break;
    case "24":
      TasaInteres = 120;
      break;

    default:
      TasaInteres = -999999999999;
      alert(
        "Cantidad de cuotas no aceptada. Puede ser 6, 12, 18 o 24 solamente."
      );
      break;
  }

  ValorCuotas =
    PiTotalAPagar / PiCantidadCuotas +
    (PiTotalAPagar / PiCantidadCuotas) * (TasaInteres / 100);

  return ValorCuotas;
}

{
  do {
    Articulo = prompt(
      "¿Qué quiere agregar al carrito?. Salir para ir a pagar a la caja."
    );

    if (Articulo != "Salir") {
      let Cantidad = prompt("Escriba qué cantidad desea agregar al carrito.");

      alert(`Pediste ${Cantidad} unidades de ${Articulo}.`);

      if (Articulo === "pelotas") {
        prompt("Escriba qué marca de pelotas queire agregar al carrito");
      }

      TotalAPagar = TotalAPagar + Calculaprecio(Articulo, Cantidad);
      alert("Total de la compra: $" + TotalAPagar); //invoco a mi función
    }
  } while (Articulo != "Salir");

  if (TotalAPagar > 0) {
    let FormaDePago = prompt(
      "¿Cómo va a pagar? (efectivo, débito, QR o crédito)"
    );
    if (FormaDePago === "crédito") {
      let CantidadCuotas = prompt(
        "¿En cuantás cuotas va a financiar? (6 con 30% de interés, 12 con 60 % de interés, 18 con 90 % de interés o 24 con 120 % de interés)"
      );

      ValorCuotas = CalculaCuotas(TotalAPagar, CantidadCuotas);

      if (ValorCuotas > 0) {
        alert("Son " + CantidadCuotas + " cuotas de $ " + ValorCuotas);

        alert(
          "Su compra fue realizada correctamente. Retire su/s producto/s por caja."
        );
      }
    }
  }
}
//template literals
// back ticks => alt + 96 ``
