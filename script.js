document.getElementById("mensaje").focus();
//El focus() método le da foco a un elemento (si se puede enfocar).

function validarFormulario() {

    // creamos las variables y le asignamos un valor que sacamos de los imput
    let nombre = document.querySelector("#nombre");
    let telefono = document.querySelector("#telefono"); // querySelector() método devuelve el primer elemento que coincide con un selector CSS.
    let correo = document.querySelector("#correo");
    let mensaje = document.querySelector("#mensaje");
    let contactoNombre = document.querySelector("#contactoNombre");
    let contactoMensaje = document.querySelector("#contactoMensaje");
    let contactoTelefono = document.querySelector("#contactoTelefono");
    let contactoCorreo = document.querySelector("#contactoCorreo");
    document.getElementById("mensaje").focus();
    let numbers = /^[0-9]+$/;
    let validacionCorreo = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let errorMensaje = document.querySelector("#errorMensaje");
    let errorNombre = document.querySelector("#errorNombre");
    let errorTelefono = document.querySelector("#errorTelefono");
    let errorCorreo = document.querySelector("#errorCorreo");
    let aux = 0;

    errorMensaje.innerHTML = "";
    errorNombre.innerHTML = "";
    errorTelefono.innerHTML = "";
    errorCorreo.innerHTML = "";
    //La innerHTMLpropiedad establece o devuelve el contenido HTML (HTML interno) de un elemento.
    // seteamos los mensajes de error en vacio, para validar nuevamente todo

    if (mensaje.value.trim() == "") { // validacion para comparar campo vacio
        errorMensaje.innerHTML = "Ingrese un Mensaje para poder Tomar su opinion"; // seteamos el valor que queremos mostrar
        document.getElementById("errorMensaje").style.visibility = "initial"; // obtenemos el contenido y le seteamos el estilo 
        if (aux == 0) {
            document.getElementById("mensaje").focus();
        }

        aux++;
    }
    // validacion que limita la cantidad de caracteres que tiene que contenter 
    if (mensaje.value.length > 300) {
        errorMensaje.innerHTML = "Longitud maxima del mensaje es de 300 caracteres"
        document.getElementById("errorMensaje").style.visibility = "initial";
        if (aux == 0) {
            document.getElementById("mensaje").focus();
        }
        aux++;

    }

    if (nombre.value.trim() == "") {
        errorNombre.innerHTML = "Ingrese su Nombre por favor";
        document.getElementById("errorNombre").style.visibility = "initial"; // modificamos el estilo de ese elemento
        //Obtener un elemento con la identificación especificada:
        if (aux == 0) {
            document.getElementById("nombre").focus();
        }
        aux++;
    }

    if (!numbers.test(telefono.value)) { // validacion para comparar que se ingrese numeros
        errorTelefono.innerHTML = "Ingrese un valor numerico";
        document.getElementById("errorTelefono").style.visibility = "initial";
        //getElementById() o Se usa casi cada vez que desea leer o editar un elemento HTML.
        if (aux == 0) {
            document.getElementById("telefono").focus();
        }
        aux++;
    }


    //// validacion que limita completar el campo con cierta estructura
    if (!validacionCorreo.test(correo.value)) {
        errorCorreo.innerHTML = "CORREO INVALIDO";
        document.getElementById("errorCorreo").style.visibility = "initial";
        if (aux == 0) {
            document.getElementById("correo").focus();
        }
        aux++;
    }

    if (correo.value.trim() == "") {
        errorCorreo.innerHTML = " Por Favor Complete este Campo";
        if (aux == 0) {
            document.getElementById("correo").focus();
        }
        aux++;
    }



    /*Verificamos que no haya ningun error, y de ser verdadero concatenamos todo*/
    if (aux == 0) {

        //Eliminar todos los nodos secundarios de una lista con el metodo removeChild()
        let removerContacto = document.getElementById("contactoNombre");
        while (removerContacto.hasChildNodes()) {
            removerContacto.removeChild(removerContacto.firstChild);
        }

        let removerTelefono = document.getElementById("contactoTelefono");
        while (removerTelefono.hasChildNodes()) {
            removerTelefono.removeChild(removerTelefono.firstChild);
        }

        let removerCorreo = document.getElementById("contactoCorreo");
        while (removerCorreo.hasChildNodes()) {
            removerCorreo.removeChild(removerCorreo.firstChild);
        }

        let removerMensaje = document.getElementById("contactoMensaje");
        while (removerMensaje.hasChildNodes()) {
            removerMensaje.removeChild(removerMensaje.firstChild);
        }

        let spanNombre = document.createElement("span");
        //El createElement() método crea un elemento.
        spanNombre.innerHTML = nombre.value;
        contactoNombre.appendChild(spanNombre);
        //El appendChild() método agrega un elemento como el último hijo de un elemento.

        let spanTelefono = document.createElement("span");
        spanTelefono.innerHTML = telefono.value;
        contactoTelefono.appendChild(spanTelefono);

        let spanCorreo = document.createElement("span");
        spanCorreo.innerHTML = correo.value;
        contactoCorreo.appendChild(spanCorreo);

        let spanMensaje = document.createElement("p");
        spanMensaje.innerHTML = mensaje.value;
        contactoMensaje.appendChild(spanMensaje);

        document.getElementById("formulario").reset();
        //El método reset() restablece los valores de todos los elementos de un formulario
    }


    return false;

}

