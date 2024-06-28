$(document).ready(function() {
    // Función para cambiar a modo claro
    $('#modo-claro').click(function() {
        $('body').removeClass('modo-oscuro');
    });

    // Función para cambiar a modo oscuro
    $('#modo-oscuro').click(function() {
        $('body').addClass('modo-oscuro');
    });
});
