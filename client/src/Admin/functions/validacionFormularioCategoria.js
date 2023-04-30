
export const validacionFormularioCategoria = (input) => {

    let errores = {};
    
    if(!input.name){
      errores.name = "Completar el campo nombre";
    }
    
    return errores
  }

