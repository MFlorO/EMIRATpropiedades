



//VALIDACION DEL FORMULARIO
export const validacionFormularioInmueble = (input) => {

    let errores = {};
    
    if(!input.nombre){
      errores.nombre = "Completar el campo nombre";
    }else if(!input.nombre.length > 10){
      errores.nombre = "No debe ser mayor a 10 caracteres";
    }
    

    if(!input.descripcion){
      errores.descripcion = "Completar el campo descripcion";
    }else if(!input.descripcion.length > 50){
      errores.descripcion = "No debe ser mayor a 10 caracteres";
    }

    if(!input.precio){
      errores.precio = "Completar el campo precio";
    }else if(! typeof input.precio == Number){
      errores.precio = "Debe ser de tipo number";
    }

    if(!input.moneda){
      errores.moneda = "Completar el campo moneda";
    }

    if(!input.imagen){
      errores.imagen = "Completar el campo imagen";
    }

    if(!input.fechaPublicacion){
      errores.fechaPublicacion = "Completar el campo fechaPublicacion";
    }

    if(!input.dormitorios){
      errores.dormitorios = "Completar el campo dormitorios";
    }else if(! typeof input.dormitorios == Number){
      errores.dormitorios = "Debe ser de tipo number";
    }

    if(!input.antiguedad){
      errores.antiguedad = "Completar el campo antiguedad";
    }else if(! typeof input.antiguedad == Number){
      errores.antiguedad = "Debe ser de tipo number";
    }

    if(!input.m2){
      errores.m2 = "Completar el campo m2";
    }else if(! typeof input.m2 == Number){
      errores.m2 = "Debe ser de tipo number";
    }

    if(!input.baños){
      errores.baños = "Completar el campo baños";
    }else if(! typeof input.baños == Number){
      errores.baños = "Debe ser de tipo number";
    }

    if(!input.cochera){
      errores.cochera = "Completar el campo cochera";
    }else if(! typeof input.cochera == Number){
      errores.cochera = "Debe ser de tipo number";
    }

    if(!input.destacado){
      errores.destacado = "Completar el campo destacado";
    }
    
    if(!input.pileta){
      errores.pileta = "Completar el campo pileta";
    }

    if(!input.idCategoria){
      errores.idCategoria = "Completar el campo Categoria";
    }
    
    return errores
  }

