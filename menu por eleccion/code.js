// Se necesita crear un menú de opciones, donde la persona escriba que quiere de comer, se le vaya sumando el valor avar pastry_list = ''

localStorage.setItem("ensalada", 9500);
localStorage.setItem("pizza", 9500);
localStorage.setItem("pastas", 9500);
localStorage.setItem("chocolatina", 9500);


function comidaEscrita(){
    let comida_pedida = document.querySelector(".input_comida").value
    if(comida_pedida != 'pagar_aqui'){
        if( localStorage.getItem(comida_pedida) != null){
            let precioComida = localStorage.getItem(comida_pedida)
            id.value = 0
            let pagar_aqui = 0
            if (localStorage.getItem(precioComida) != null){
                pagar_aqui = precioComida * parseInt(id.value);
                localStorage.setItem(precioComida,pagar_aqui)

            }else{
                pagar_aqui = parseInt(localStorage.getItem(precioComida))
                pagar_aqui = pagar_aqui + precioComida
                localStorage.setItem(precioComida,$(total)
            }
        }

    }

}


// ----------------------------

function multiplicacion(){
    var num1 =document.querySelector('.num_entrada')
    var num2 =document.querySelector('.num_salida')
    multiplicacion = 0
    for(let i=0, i<=num2, i++){
        multipplicacion = i * num1
        document.querySelector("#resultado_tabla").innerHTML += `
            <h5>${num1} X ${i} = ${multiplicacion}</h5>

    }
    }



