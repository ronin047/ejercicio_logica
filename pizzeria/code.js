
// function bloqueo_check(){
//     if(document.getElementById(nino-10).checked == true){
//         document.getElementById(nina-10).setAttribute("disabled","")
//     }}

function verificar(){
    var menor = 
    // parte menor de edad
    if(document.getElementById('nino-10').checked == true ){
        document.querySelector('#respuesta').value = "reclama un jugo"
        document.getElementById('mayor_18').setAttribute("disabled","")
    
    }else if (document.getElementById('mayor_18').checked == true ){  
            document.querySelector('#respuesta').value += "reclama una cerveza, y puedes tambien "; 
            if(document.getElementById('mujer').checked == true ){  
                document.querySelector('#respuesta').value += "reclamar adicionalmente una porción de pizza Hawaiana"}
            else{ 
                document.querySelector('#respuesta').value += "reclamar adicionalmente una porción de pizza tres carnes"}
        
    }else{
        document.querySelector('#respuesta').value += "se le debe informar que desafortunadamente, no recibe ningún premio"
    }}
    
