// Se necesita validar si un número ingresado por el usuario es par o impar.
function validacion(){
    var nbr;
    nbr = Number(document.getElementById("mi_num").value);
    if(nbr%2 == 0)
    {
        alert("Nombre pair");
    }
    else
    {
        alert("Nombre impair");
    }
}