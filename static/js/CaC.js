//header
window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);

    let logopequeño = document.querySelector('.mini-logo');
    logopequeño.style.display = window.scrollY > 0 ? 'block' : 'none';
});

//contacto. hecho por cata
function validardatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("mail").value;
    let suscomentarios = document.getElementById("comentario").value;
    let error = document.getElementById("error")

    error.innerHTML = "";
    if (nombre === "" && apellido === "" && telefono === "" && email === "") {
        error.innerHTML = "Por favor, complete los campos requeridos"
        return false
    }

    if (nombre === "" || /^([0-9])*$/.test(nombre)) {
        error.innerHTML = "Por favor, ingrese un nombre válido"
        return false
    }
    if (apellido === "" || /^([0-9])*$/.test(apellido)) {
        error.innerHTML = "Por favor, ingrese un apellido válido"
        return false
    }
    if (telefono === "") {
        error.innerHTML = "Por favor, ingrese un número de télefono válido"
        return false
    }
    if (email === "" ) {
        error.innerHTML = "Por favor, ingrese una dirección de email válida"
        return false
    }
    
    else{
        alert("Envío de formulario exitoso")
        return true
    }


}