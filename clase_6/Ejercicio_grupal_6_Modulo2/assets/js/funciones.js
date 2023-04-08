 //obtenemos el elemento form del DOM por si "id" y lo 
 //asignamos a la variable form
 let form = document.getElementById("form");

 //se asigna un evento de escucha al elemento (formulario)
 //en este caso es el evento submit, cuando ocurre lo asigna a la función,
 // el método preventDefault evita que se envíe el formulario por defecto.
 form.addEventListener("submit", function(event) {
  event.preventDefault()
// se obtiene el valor de cada input pot si id 
    let nombre = document.getElementById("name").value;
    let correo = document.getElementById("email").value;
    let mensaje = document.getElementById("message").value;
// se envian a validar los datos invocando la función validar()
// con los parámetros obtenidos  
    let resultado = validar(nombre, correo, mensaje);
// Si el resultado es verdadero invoca la función exito() 
// que envía un mensaje de datos enviados y limpia los mensajes de errores 
    if (resultado == true) {
        console.log("ver resultado",resultado);// solo debug
        exito();
        limpiar();
    };
});

function exito() {
    document.querySelector(".mensaje-0").innerHTML = "Mensaje enviado con éxito";
    document.querySelector(".mensaje-1").innerHTML = "";
    document.querySelector(".mensaje-2").innerHTML = "";
    document.querySelector(".mensaje-3").innerHTML = "";
};
//limpia el valor de los input una vez que el formulario es enviado
function limpiar(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

// función que valida los valores ingresados
function validar(nombre, correo, mensaje) {
    let pasamosLaValidacion = true;
// validación del nombre de usuario
    if( nombre == "" || nombre.length == 0 || /^\s+$/.test(nombre) || /^([0-9])*$/.test(nombre) ) {  
        document.querySelector(".mensaje-1").innerHTML = "El nombre es requerido o ingrese un nombre valido";
        document.querySelector(".mensaje-0").innerHTML = "";
        //selecciona el elemento a editar
        document.getElementById("nombre").select();
        pasamosLaValidacion = false;
    } else {
         pasamosLaValidacion = true;
    };
// validación del correo electrónico
    if( correo == "" || correo.length == 0 || /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo) ) {      
        document.querySelector(".mensaje-2").innerHTML = "El correo es requerido o ingrese un correo valido"
        document.querySelector(".mensaje-0").innerHTML = "";
        document.getElementById("email").select();
        pasamosLaValidacion = false;
    } else {
        pasamosLaValidacion = true;
    };
    
// validación mensaje   
    if( mensaje == "" || mensaje.length == 0 || /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mensaje) ) {  
        document.querySelector(".mensaje-3").innerHTML = "El mensaje es requerido"
        document.querySelector(".mensaje-0").innerHTML = "";
        document.getElementById("message").select();
        pasamosLaValidacion = false;
    } else {
        pasamosLaValidacion = true;
    };
    
    return pasamosLaValidacion;
        
};