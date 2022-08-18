// Se necesitan sumar los números del 1 a n, donde n es un número que le pedimos al usuario.

function numberSum() {
    var numero_persona = prompt ("cual es su numero al hasard ?")
    console.log (numero_persona)
    // var monstrar_num_personna = promt (" su numero es : ",numero_persona)
    
    var total = 0;
    for(var n = 1; n<= numero_persona; n++){
    total += n;
    }
    return total;
    }   
console.log(numberSum())
