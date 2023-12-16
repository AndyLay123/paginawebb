function confirmarReserva() {
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const personas = document.getElementById("personas").value;
    const comentarios = document.getElementById("comentarios").value;

    const confirmacionDiv = document.getElementById("confirmacion");
    const fechaHoraConfirmacion = document.getElementById("confirmacion-fecha-hora");

    // Formatear la hora para mostrarla en formato de 12 horas
    const horaFormateada = formatHourTo12HourFormat(hora);

    fechaHoraConfirmacion.textContent = fecha + " a las " + horaFormateada;
    confirmacionDiv.style.display = "block";
    reservacionForm.style.display = "none";
}

function formatHourTo12HourFormat(time) {
    const [hour, minute] = time.split(':');
    const hourInt = parseInt(hour, 10);
    const ampm = hourInt >= 12 ? 'PM' : 'AM';
    const formattedHour = (hourInt % 12 || 12).toString();
    return formattedHour + ':' + minute + ' ' + ampm;
}
