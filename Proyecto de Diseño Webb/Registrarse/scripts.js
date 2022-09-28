function validar (){
nombre, apellido, email, contraseña;
nombre = document.querySelector("nombre").value;
apellido = document.querySelector("apellido").value;
email = document.querySelector("email").value;
contraseña = document.querySelector("contraseña").value;

expresion = /\w+@\w+\.+ [a-z ]/;


if(nombre === "" || apellido === "" || email === "" || contraseña ==="" ){
    alert("Todos los campos son obligatorios");
    return false;
}
else if (nombre.length > 30) {
    alert("El nombre es muy largo");
    return false;
}

else if (apellido.length > 30) {
    alert("El apellido es muy largo");
    return false;
}
 
else if(!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
}
else if (email.length > 100) {
    alert("El email es muy largo");
    return false;

}
else if (contraseña.length > 20) {
    alert("La contraseña solo debe tener 20 caracteres como maximo");
    return false;


}
}