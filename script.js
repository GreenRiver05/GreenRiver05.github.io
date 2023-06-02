function validarFormulario() {
    // creamos las variables y le asignamos un valor que sacamos de los imput
    let nombre = document.querySelector("#nombre");
    let telefono = document.querySelector("#telefono");
    let correo = document.querySelector("#correo");
    let mensaje = document.querySelector("#mensaje");
    let validacionCorreo = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let errorMensaje = document.querySelector("#errorMensaje");
    let errorNombre = document.querySelector("#errorNombre");
    let errorTelefono = document.querySelector("#errorTelefono");
    let errorCorreo = document.querySelector("#errorCorreo");
    errorMensaje.innerHTML = "";
    errorNombre.innerHTML = "";
    errorTelefono.innerHTML = "";
    errorCorreo.innerHTML = "";

    if (nombre.value.trim() == "") {
        errorNombre.innerHTML = "Ingrese su Nombre por favor";
        document.getElementById("errorNombre").style.visibility = "initial";


    }

    if (isNaN(telefono)) {
        telefono.innerHTML = "Ingrese un valor numerico";
        document.getElementById("errorTelefono").style.visibility = "initial";
    }







    return false;

}