function validar (){
    var email, contraseña;
    email = document.getElementById("email").value;
    contraseña = document.getElementById("contraseña").value;
    
    expresion = /\w+@\w+\.+ [a-z ]/;
    
    
    if( email === "" || contrasea ==="" ){
        alert("Todos los campos son obligatorios");
        return false;
    }
   
    else if (email.length > 50) {
        alert("El email es muy largo");
        return false;
    
    }
    else if (contraseña.length > 20) {
        alert("La contraseña solo debe tener 20 caracteres como maximo");
        return false;
    
    
    }
    }