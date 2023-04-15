
const email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

//VALIDACION DEL FORMULARIO
export const validacionFormulario = (input) => {

    let errores = {};
  
    if((!input.user_name)) errores.user_name = "Completar el campo nombre";
    if((input.user_name.length > 20)) errores.user_name = "El nombre no puede ser tan largo"

    if(!input.user_email){
      errores.user_email = "Completar el campo email";
    }else if(!email.test(input.user_email)){   
      errores.user_email = "Error en el formato del email"
    }

    if((!input.telefono)) errores.telefono = "Completar el campo teléfono";

    if((!input.message)) errores.message = "Completar el campo consulta";
    
    return errores
  }

