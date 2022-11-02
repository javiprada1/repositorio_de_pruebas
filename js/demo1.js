/*
El código siguiente asegura que el campo no esté vacío. 
Primero, recortamos cualquier espacio en blanco inicial y final.
*/
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}
function checkEmail(email) {
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if (pattern.test(email)) {
        return true;
    } else {
        return false;
    }
}


/* En esta demostración, cambiamos la visibilidad del formulario. Esto se hace accediendo al elemento de formulario <form> y 
estableciendo su propiedad de visualización como se muestra en el siguiente código: */
function toggleFormVisibility() {
    var frm_element = document.getElementById('subscribe_frm');
    var sub_link_element = document.getElementById('sub');
    var nosub_link_element = document.getElementById('nosub');

    var vis = frm_element.style;

    if (vis.display == '' || vis.display == 'none') {
        vis.display = 'block';
        sub_link_element.style.display = 'none';
        nosub_link_element.style.display = '';
    } else {
        vis.display = 'none';
        sub_link_element.style.display = 'block';
        nosub_link_element.style.display = 'none';
    }
}


function processFormData() {
    var name_element = document.getElementById('txt_name');
    var email_element = document.getElementById('txt_email');
    var mail_format_element = document.getElementById('slt_mail_format');

    var name = trim(name_element.value);
    var email = trim(email_element.value);
    var mail_format = mail_format_element.value;

    var error_message = 'Hay campos que contienen errores. \n\n';
    var data = 'Debes coimpletar la siguiente información: \n\n';
    var error_flag = false;

    if (name == '') {
        error_message += 'Nombre: Debe introducir su nombre\n';
        error_flag = true;
    } else {
        data += 'Nombre: ' + name + '\n';
    }



    if (!checkEmail(email)) {
        error_message += 'Email: Debe introducir su email con el formato correcto.';
        error_flag = true;
    } else {
        data += 'Email: ' + email + '\n';
    }

    data += 'Formato deseado: ' + mail_format;

    if (error_flag) {
        alert(error_message);
    } else {
        alert(data);
    }

}









