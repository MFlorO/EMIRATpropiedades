
const email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
// const nombre = ""

//VALIDACION DEL FORMULARIO
export const validacionFormularioInmueble = (input) => {

    let errores = {};
    
    if(!input.displayName){
      errores.displayName = "Completar el campo nombre";
    }
    // else if(!email.test(input.displayName)){   
    //   errores.displayName = "Error en el formato del nombre"
    // }

    if(!input.email){
      errores.email = "Completar el campo email";
    }else if(!email.test(input.email)){   
      errores.email = "Error en el formato del email"
    }

    if((!input.password)) errores.password = "Completar el campo Contraseña";
    
    return errores
  }

