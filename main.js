console.log("cargado");

let formulario = document.querySelector("form");
let camposFaltantes = document.querySelector("#missing");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let error = "";
    let todoOk = 0;
    let tarjeta = document.querySelector("#tarjetaC").value;
    let cvc = document.querySelector("#cvc").value;
    let monto = document.querySelector("#amount").value;
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let ciudad = document.querySelector("#ciudad").value;
    let select = document.querySelector("#inputGroupSelect04").value;
    let codigoPostal = document.querySelector("#codigoP").value;

    if (tarjeta === "") {
        document.querySelector("#tarjetaC").style.background = "#f8d7da";
        camposFaltantes.classList.remove("d-none");
        error += "Campo Tarjeta Credito vacío, favor completar.<br>"
        camposFaltantes.innerHTML = error;
       

    } else {
        document.querySelector("#tarjetaC").style.background = "none";
        todoOk++;
    }
    if (cvc === "") {
        document.querySelector("#cvc").style.background = "#f8d7da";
        camposFaltantes.classList.remove("d-none");
        error += "Campo CVC vacío, favor completar. <br>"
        camposFaltantes.innerHTML = error;
        
    } else {
        document.querySelector("#cvc").style.background = "none";
        todoOk++;
    }

    if (monto === "") {
        document.querySelector("#amount").style.background = "#f8d7da";
        camposFaltantes.classList.remove("d-none");
        error += "Campo monto vacío, favor completar. <br>"
        camposFaltantes.innerHTML = error;
        
    } else {
        document.querySelector("#amount").style.background = "none";
        todoOk++;
    }

    if (nombre === "") {
        document.querySelector("#nombre").style.background = "#f8d7da";
        camposFaltantes.classList.remove("d-none");
        error += "Campo nombre vacío, favor completar. <br>"
        camposFaltantes.innerHTML = error;
    } else {
        document.querySelector("#nombre").style.background = "none";
        todoOk++;
    }

    if (apellido === "") {
        document.querySelector("#apellido").style.background = "#f8d7da";
        camposFaltantes.classList.remove("d-none");
        error += "Campo apellido vacío, favor completar. <br>"
        camposFaltantes.innerHTML = error;
    } else {
        document.querySelector("#apellido").style.background = "none";
        todoOk++;
    }

    if (ciudad === "") {
        document.querySelector("#ciudad").style.background = "#f8d7da";
        camposFaltantes.classList.remove("d-none");
        error += "Campo ciudad vacío, favor completar. <br>"
        camposFaltantes.innerHTML = error;
    } else {
        document.querySelector("#ciudad").style.background = "none";
        todoOk++;
    }

    if (select === "nada") {
        document.querySelector("#inputGroupSelect04").style.background = "#f8d7da";
        error += "Campo State vacío, favor elegir una opcion. <br>"
        camposFaltantes.innerHTML = error;
    } else {
        document.querySelector("#inputGroupSelect04").style.background = "none";
        todoOk++;
    }

    if (codigoPostal === "") {
        document.querySelector("#codigoP").style.background = "#f8d7da";
        camposFaltantes.classList.remove("d-none");
            error += "Campo Codigo Postal vacío, favor completar. <br>"
            camposFaltantes.innerHTML = error;
    } else {
        document.querySelector("#codigoP").style.background = "none";
        todoOk++;
    }

    if(todoOk ===8){
        formulario.submit();
    }







});