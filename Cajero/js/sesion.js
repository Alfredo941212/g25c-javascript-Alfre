document.addEventListener('DOMContentLoaded', function(){
    
    let usuarios = ["Gemima", "Felipe"];
    let passwords = ["Nabolom", "usuario1234"];
    
    let entrarAhora = 'index.html'
    
    function matchUserPassword(){   
        const nombre = document.querySelector('#ingresar').value
        const contraseña = document.querySelector('#contraseña').value
       
        let login = false;
        for(let i = 0; i<usuarios.length; i++){
            if(nombre===usuarios[i] && contraseña===passwords[i]){
                login = true;
                localStorage.setItem("usuario", nombre);
                
                break;
            }
        }
        if(login==true){
            window.open(entrarAhora)
        }else{
            document.querySelector(".entrada").innerHTML = "Hay un error en el usuario y/o contraseña."
        }
    }
    
    
    document.querySelector("#centro").addEventListener("click", matchUserPassword);
    
    document.querySelector("#contraseña").addEventListener("keyup", function(event){
        if(event.key=="Enter"){
            document.querySelector("#centro").click();
        }
    })

})