const numero = document.querySelector("#number")//id
const lista = document.querySelector("#lista")//id
const boton = document.querySelector("#boton")//clase

boton.addEventListener("click", () => {
  while( lista.firstChild ){
    lista.removeChild( lista.firstChild );
  }
  if (parseInt(numero.value) > 0) {
    for (let i = 0; i <= 10; i++) {
      let li = document.createElement("LI");
      li.innerHTML = `${numero.value} * ${i} = ${numero.value * i}`;
      lista.appendChild(li)
    }
  } else {
    // si la primera condicion no se cumple nos da un alert
    alert("Debes ingresar un número mayor a 0 para multiplicar!!");
  }
});
