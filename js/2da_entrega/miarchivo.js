//Objeto simple
/*const articulo = {
  nombre:"remera",
  marca:"Nike",
  precio:5000,
  cantidad: 25,
};*/

const ArrayCarrito = [];
let Articulo = "";
let Cantidad = 0;
let Marca = "";
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

//Object constructor Articulo
function ConstArticulo(PiNombre, PiMarca, PiPrecio, PiCantidad) {
  this.PiNombre = PiNombre;
  this.PiMarca = PiMarca;
  this.PiPrecio = PiPrecio;
  this.PiCantidad = PiCantidad;
}

//Programa principal
{
  do {
    Articulo = prompt(
      "¿Qué quiere agregar al carrito?. Salir para ir a pagar a la caja."
    );

    //Uso función pasar todo a minúscula para que no sea key sensitive.
    Articulo = Articulo.toLowerCase(Articulo);
    console.log(Articulo);

    if (Articulo != "salir") {
      let Cantidad = prompt("Escriba qué cantidad desea agregar al carrito.");
      let Marca = prompt("Escriba la marca que desea de su producto.");

      alert(`Pediste ${Cantidad} unidades de ${Articulo} de marca ${Marca}.`);

      //Uso el constructor ConstArticulo que cree con la función de antes
      //invoco a mi función para 1 sólo poducto
      articulo1 = new ConstArticulo(
        Articulo,
        Marca,
        Calculaprecio(Articulo, 1),
        Cantidad
      );
      console.log(articulo1);
      //Cargo los productosen en ArrayCarrito
      ArrayCarrito.push(articulo1);
      console.log(ArrayCarrito);

      TotalAPagar = TotalAPagar + Calculaprecio(Articulo, Cantidad); //invoco a mi función
      alert("Total de la compra: $" + TotalAPagar);
    }
  } while (Articulo != "salir");

  //Recorre el carrito y muestra los que se vendieron más de 5
  for (PiNombre of ArrayCarrito) {
    if (PiNombre.PiCantidad > 5) {
      console.log(PiNombre );
      console.log(PiNombre.PiCantidad );
    }
  }
  
  if (TotalAPagar > 0) {
    let FormaDePago = prompt(
      "¿Cómo va a pagar? (efectivo, débito, QR o crédito)"
    );
    //Uso función pasar todo a minúscula para que no sea key sensitive.
    FormaDePago = FormaDePago.toLowerCase(FormaDePago);

    if (FormaDePago === "crédito") {
      let CantidadCuotas = prompt(
        "¿En cuantás cuotas va a financiar? (6 con 30% de interés, 12 con 60 % de interés, 18 con 90 % de interés o 24 con 120 % de interés)"
      );

      ValorCuotas = CalculaCuotas(TotalAPagar, CantidadCuotas); //invoco a mi función

      if (ValorCuotas > 0) {
        alert("Son " + CantidadCuotas + " cuotas de $ " + ValorCuotas);

        alert(
          "Su compra fue realizada correctamente. Retire su/s producto/s por caja."
        );
      } 
  }
  else
  alert(
    "Su compra fue realizada correctamente. Retire su/s producto/s por caja.");
  }
  //Clase 5. Objetos
  /*
  //agrega un campo al objeto
  articulo.imagen="..\img\remera_nike.jpg";

  //borra un campo al objeo
  delete articulo.imagen;

  //destructuring
  const{nombre} = producto;
  console.log(nombre);

  //Con alert no muestra los campos del objeto ni nombrte del objeto
  console.log(articulo);
*/

  /*
  const articulo=articulo1.PiNombre;
  */
}
