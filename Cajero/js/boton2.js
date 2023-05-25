
const deposito = document.querySelector("#depositar")
const retiro = document.querySelector("#retirar")
let resultado = document.querySelector(".saldo")

deposito.addEventListener("click", depositardinero)
/resultado.addEventListener("submit", informacion)

function depositardinero() {
     const d = parseFloat(document.querySelector("#numero23").value)

    if( d <= 50000){
      resultado.textContent = d;
       alert("Usted ingreso la cantidad de " + d + " pesos")
       
    }else{
        
        alert("No puede depositar  mas de 50,000.00")
    }
    
} 

retirar.addEventListener("click", (e) => {

    let d = (parseFloat (document.querySelector("#numero13").value))

    if(d >= 30000){
    alert("No puede retira mas de 30,000.00")

    }else{
       alert("Se ha retirado la cantida de $ "+ d + " pesos" )
    }

})

/*function informacion(){
    resultado = d;
    alert("Resualto es de " + resultado )
}*/
