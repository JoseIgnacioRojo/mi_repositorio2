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
  //Uso de DOM-Inicio
  let SeccionHead = document.querySelector("head");
  //console.log(SeccionHead);
  let CuerpoPral = document.querySelector("body");
  //console.log(CuerpoPral);
  let Agregarh2 = document.createElement("h2");
  Agregarh2.innerHTML = "Pagando en efectivo obtendrá un 10 % (de descuento).";
  document.body.appendChild(Agregarh2);
  //console.log(Agregarh2);

  //Agrego botón Agregar remera a changuito
  let BotAgrRemera = document.createElement("button");
  BotAgrRemera.setAttribute("class", "clase btn");
  BotAgrRemera.setAttribute("id", "btnAgrRemera");
  BotAgrRemera.textContent = "Agregar remera a changuito";
  document.body.appendChild(BotAgrRemera);
  //Captura el evento click de botón Agregar remera a changuito
  BotAgrRemera.addEventListener("click", () => {
    Articulo = "remera";
    Marca = "Nike";
    Cantidad = 1;

    //Uso el constructor ConstArticulo que cree con la función de antes
    //invoco a mi función para 1 sólo poducto
    articulo1 = new ConstArticulo(
      Articulo,
      Marca,
      Calculaprecio(Articulo, 1),
      Cantidad
    );
    //console.log(articulo1);
    //Cargo el producto en el ArrayCarrito
    ArrayCarrito.push(articulo1);
    //console.log(ArrayCarrito);

    //TotalAPagar = TotalAPagar + Calculaprecio(Articulo, Cantidad); //invoco a mi función
    TotalAPagar += Calculaprecio(Articulo, Cantidad); //invoco a mi función
  });

  //Agrego botón Eliminar remera a changuito
  let BotElimRemera = document.createElement("button");
  BotElimRemera.setAttribute("class", "clase btn");
  BotElimRemera.setAttribute("id", "btnElimRemera");
  BotElimRemera.textContent = "Eliminar remera de changuito";
  document.body.appendChild(BotElimRemera);
  //Captura el evento click de botón Eliminar remera de changuito
  BotElimRemera.addEventListener("click", () => {
    Articulo = "remera";
    Marca = "Nike";
    Cantidad = 1;

    //Uso el constructor ConstArticulo que cree con la función de antes
    //invoco a mi función para 1 sólo poducto
    articulo1 = delete ConstArticulo(
      Articulo,
      Marca,
      Calculaprecio(Articulo, 1),
      Cantidad
    );
    //console.log(articulo1);
    //Elimino el producto en el ArrayCarrito
    ArrayCarrito.pop(articulo1);
    //console.log(ArrayCarrito);

    //TotalAPagar = TotalAPagar - Calculaprecio(Articulo, Cantidad); //invoco a mi función*/
    TotalAPagar -= Calculaprecio(Articulo, Cantidad); //invoco a mi función*/
  });

  //Agrego botón Agregar raqueta a changuito
  let BotAgrRaqueta = document.createElement("button");
  BotAgrRaqueta.setAttribute("class", "clase btn");
  BotAgrRaqueta.setAttribute("id", "btnAgrRaqueta");
  BotAgrRaqueta.textContent = "Agregar raqueta a changuito";
  document.body.appendChild(BotAgrRaqueta);
  //Captura el evento click de botón Agregar raqueta a changuito
  BotAgrRaqueta.addEventListener("click", () => {
    Articulo = "raqueta";
    Marca = "Wilson";
    Cantidad = 1;

    //Uso el constructor ConstArticulo que cree con la función de antes
    //invoco a mi función para 1 sólo poducto
    articulo1 = new ConstArticulo(
      Articulo,
      Marca,
      Calculaprecio(Articulo, 1),
      Cantidad
    );
    //console.log(articulo1);
    //Cargo el producto en en ArrayCarrito
    ArrayCarrito.push(articulo1);
    //console.log(ArrayCarrito);

    //TotalAPagar = TotalAPagar + Calculaprecio(Articulo, Cantidad); //invoco a mi función
    TotalAPagar += Calculaprecio(Articulo, Cantidad); //invoco a mi función
  });

  //Agrego botón Eliminar raqueta del changuito
  let BotElimRaqueta = document.createElement("button");
  BotElimRaqueta.setAttribute("class", "clase btn");
  BotElimRaqueta.setAttribute("id", "btnElimRaqueta");
  BotElimRaqueta.textContent = "Eliminar raqueta de changuito";
  document.body.appendChild(BotElimRaqueta);
  //Captura el evento click de botón Eliminar raqueta de changuito
  BotElimRaqueta.addEventListener("click", () => {
    Articulo = "raqueta";
    Marca = "Wilson";
    Cantidad = 1;

    //Uso el constructor ConstArticulo que cree con la función de antes
    //invoco a mi función para 1 sólo poducto
    articulo1 = delete ConstArticulo(
      Articulo,
      Marca,
      Calculaprecio(Articulo, 1),
      Cantidad
    );
    //console.log(articulo1);
    //Elimino el producto en el ArrayCarrito
    ArrayCarrito.pop(articulo1);
    //console.log(ArrayCarrito);

    //TotalAPagar = TotalAPagar - Calculaprecio(Articulo, Cantidad); //invoco a mi función*/
    TotalAPagar -= Calculaprecio(Articulo, Cantidad); //invoco a mi función*/
  });

  //Agrego botón Agregar pelota de tenis a changuito
  let BotAgrPelota = document.createElement("button");
  BotAgrPelota.setAttribute("class", "clase btn");
  BotAgrPelota.setAttribute("id", "btnAgrPelota");
  BotAgrPelota.textContent = "Agregar pelota a changuito";
  document.body.appendChild(BotAgrPelota);
  //Captura el evento click de botón Agregar pelota a changuito
  BotAgrPelota.addEventListener("click", () => {
    //console.log("Click en el botón de id btnAgrPelota");

    Articulo = "pelotas";
    Marca = "Penn";
    Cantidad = 1;

    //Uso el constructor ConstArticulo que cree con la función de antes
    //invoco a mi función para 1 sólo poducto
    articulo1 = new ConstArticulo(
      Articulo,
      Marca,
      Calculaprecio(Articulo, 1),
      Cantidad
    );
    //console.log(articulo1);
    //Cargo el producto en en ArrayCarrito
    ArrayCarrito.push(articulo1);
    //console.log(ArrayCarrito);

    //TotalAPagar = TotalAPagar + Calculaprecio(Articulo, Cantidad); //invoco a mi función
    TotalAPagar += Calculaprecio(Articulo, Cantidad);
  });

  //Agrego botón Eliminar pelota del changuito
  let BotElimPelota = document.createElement("button");
  BotElimPelota.setAttribute("class", "clase btn");
  BotElimPelota.setAttribute("id", "btnElimPelota");
  BotElimPelota.textContent = "Eliminar pelota de changuito";
  document.body.appendChild(BotElimPelota);
  //Captura el evento click de botón Eliminar pelota de changuito
  BotElimPelota.addEventListener("click", () => {
    Articulo = "pelotas";
    Marca = "Penn";
    Cantidad = 1;

    //Uso el constructor ConstArticulo que cree con la función de antes
    //invoco a mi función para 1 sólo poducto
    articulo1 = delete ConstArticulo(
      Articulo,
      Marca,
      Calculaprecio(Articulo, 1),
      Cantidad
    );
    //console.log(articulo1);
    //Elimino el producto en el ArrayCarrito
    ArrayCarrito.pop(articulo1);
    //console.log(ArrayCarrito);

    //TotalAPagar = TotalAPagar - Calculaprecio(Articulo, Cantidad); //invoco a mi función*/
    TotalAPagar -= Calculaprecio(Articulo, Cantidad); //invoco a mi función*/
  });

  //Agrego botón Ir a caja
  let BotonIrACaja = document.createElement("button");
  BotonIrACaja.setAttribute("class", "clase btn");
  BotonIrACaja.setAttribute("id", "btnIrACaja");
  BotonIrACaja.textContent = "Ir a Caja";
  document.body.appendChild(BotonIrACaja);
  //Captura el evento click de botón Ir a Caja
  BotonIrACaja.addEventListener("click", () => {
    //Recorre el carrito y muestra
    /*ArrayCarrito.forEach((carrito, indice) => {
      console.log(
        `${indice} : ${carrito.PiNombre} ${carrito.PiMarca} ${carrito.PiPrecio} ${carrito.PiCantidad}`
      );
    });*/

    //console.log("Total de la compra: $" + TotalAPagar);

    //Uso de Storage para guardar Importe total de la compra
    sessionStorage.setItem("TotalCompra", TotalAPagar);
    //localStorage.setItem('TotalCompra',TotalAPagar);

    let TotCompr = sessionStorage.getItem("TotalCompra");
    console.log("Importe total de la compra= " + TotCompr);

    //Uso de JSON para guardar el listado de todo lo comprado
    const enJSON = JSON.stringify(ArrayCarrito);
    console.log(enJSON);

    let ListaDeCompras = JSON.parse(enJSON);
    console.log(ListaDeCompras);
  });
  //Uso de DOM-Fin

  


  /*
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

  //Recorre el carrito y muestra
  ArrayCarrito.forEach((carrito, indice) => {
    console.log(
      `${indice} : ${carrito.PiNombre} ${carrito.PiMarca} ${carrito.PiPrecio} ${carrito.PiCantidad}`
    );
  });

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
    } else
      alert(
        "Su compra fue realizada correctamente. Retire su/s producto/s por caja."
      );
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
