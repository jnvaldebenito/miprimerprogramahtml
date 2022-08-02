const numero = document.querySelector("#number")//id
const lista = document.querySelector("#lista")//id
const boton = document.querySelector("#boton")//clase

boton.addEventListener("click", () =>{
    if (true){
        console.log("asd")
        for(i=0;i<=10;i++){
            let li = document.createElement("LI")
            li.innerHTML = `${numero.value} * ${i} = ${numero.value*i}`;
            lista.appendChild(li)
        }
    }
    else { // si la primera condicion no se cumple nos da un alert
        alert("Completa todos los campos!!")
    }
})
