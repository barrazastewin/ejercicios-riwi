

var allPersons = [];
function guardarUsuario(){
    
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;
    
    if (nombres == ""){
        document.getElementById("nombres").focus()
        document.getElementById("nombres").classList.add("is-invalid")
        document.getElementById("nombres").classList.remove("is-valid")
        
    }else {
        document.getElementById("nombres").classList.add("is-valid")
        document.getElementById("nombres").classList.remove("is-invalid")
    }

    if (apellidos == ""){
        document.getElementById("apellidos").focus();
        document.getElementById("apellidos").classList.add("is-invalid")
        document.getElementById("apellidos").classList.remove("is-valid")
        
    }else{
        document.getElementById("apellidos").classList.add("is-valid")
        document.getElementById("apellidos").classList.remove("is-invalid")
    }


    if (correo == ""){
        document.getElementById("correo").focus();
        document.getElementById("correo").classList.add("is-invalid")
        document.getElementById("correo").classList.remove("is-valid")

        
        
    }else{
        document.getElementById("correo").classList.add("is-valid")
        document.getElementById("correo").classList.remove("is-invalid")
    }

    if (nombres != "" && apellidos != "" && correo != ""){
        let cuerpoTabla = document.getElementById("cuerpoTabla")
        let fila = cuerpoTabla.insertRow(-1);
        let celdaNombre = fila.insertCell(0);
        let celdaApellidos = fila.insertCell(1);
        let celdaCorreo = fila.insertCell(2);
    
        celdaNombre.innerText = nombres;
        celdaApellidos.innerText = apellidos;
        celdaCorreo.innerText = correo;
    
        document.getElementById("nombres").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("correo").value = ""; 

        document.getElementById("nombres").classList.remove("is-invalid")
        document.getElementById("nombres").classList.remove("is-valid")
        document.getElementById("apellidos").classList.remove("is-invalid")
        document.getElementById("apellidos").classList.remove("is-valid")
        document.getElementById("correo").classList.remove("is-invalid")
        document.getElementById("correo").classList.remove("is-valid")

    }
    
 


}