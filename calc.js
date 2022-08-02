const botones = document.querySelectorAll("#boton");
const operador = document.querySelectorAll("#operator");
const vieport = document.querySelector("#vieport");
const resultado = document.querySelector("#resultado");

//haciendo pruebas
let value = [''];
let operator = '';
let index = 0;

vieport.value = 0;
const actionClick = function(evento){
  value[index] = `${value[index]}${this.innerText}`;
  vieport.value = value[index];
}

const actionClickOperator = function(evento){
  operator = this.innerText;
  index++;
  value[index] = '';
}

const actionClickResultado = function(evento){
  switch (operator) {
    case 'add':
      vieport.value = parseInt(value[0]) + parseInt(value[1]);
      break;
  }
}

botones.forEach(boton => {
  boton.addEventListener("click", actionClick);
})

operador.forEach(operator => {
  operator.addEventListener("click", actionClickOperator);
})

resultado.addEventListener("click", actionClickResultado);

