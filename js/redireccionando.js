// Función para la cuenta regresiva
function iniciarCuentaAtras() {
    var segundos = 15;
    var cuentaAtras = document.getElementById("cuenta-atras");

    var intervalo = setInterval(function() {
        cuentaAtras.innerHTML = segundos;
        segundos--;

        if (segundos < 0) {
            clearInterval(intervalo);
            // Aquí puedes redirigir a la URL deseada
            window.location.href = "../html/pag_inicial.html";
        }
    }, 1000);
}

// Llamamos a la función al cargar la página
window.onload = function() {
    iniciarCuentaAtras();
};

function inicio() {
    // Obtener la fecha y hora actual
    var fechaActual = new Date();
  
    // Obtener el día de la semana (domingo, lunes, martes, etc.)
    var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var diaSemana = diasSemana[fechaActual.getDay()];

    // Formatear la fecha en el formato que desees
    var fechaFormateada = fechaActual.toLocaleDateString() + ' ' + fechaActual.toLocaleTimeString();
  
    // Mostrar el mensaje con el día de la semana, fecha y hora actual en negrita
    alertify.alert().set('message', '<strong>Has cruzado con éxito</strong> <br> Por motivos de seguridad, tus datos, incluida la fecha de tu sistema se entrelazarán momentáneamente con la oscuridad de esta experiencia. Puedes confiar en que tus secretos estarán resguardados, pero te instamos a no desvelar las claves más profundas. <br><br> Fecha actual registrada en el sistema: <strong>' + diaSemana + ', ' + fechaFormateada + '</strong>').show();

    // Iniciar cuenta atrás después de la alerta
    setTimeout(function() {
        iniciarCuentaAtras();
    }, 1000);
}
