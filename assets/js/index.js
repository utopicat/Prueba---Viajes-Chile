
//mensaje de form enviado//
$(document).ready(function () { //citar o convocar al documento//
    $('#enviar-form').click(function () { //id enviar-form. evento hacer click//
        alert("El formulario de contacto fue enviado correctamente"); //dar mensaje de alerta con el contenido indicado//
    });
}); //cierres//

$(document).ready(function () { 
    $('.icono').dblclick(function () { //al hacer doble click en culuiera de los favicons de clase icono, c viene funcion
        $(".texto").hide(); //la funcion es ocultar texto en los parrafos de clase tecto y mostrar solo favicons
    });
});