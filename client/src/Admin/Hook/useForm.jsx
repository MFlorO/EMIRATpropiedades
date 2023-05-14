import { useState } from 'react';


export const useForm = ( initialForm = {}, validate ) => {
  
const [ formState, setFormState ] = useState( initialForm );

const [ errorFormValid, seterrorFormValid ] = useState( {} );

const formValid = () => (Object.keys(errorFormValid).length > 0) ? true : false

const onInputChange = ({ target }) => {

    let { name, value } = target;


    if (name === 'pileta' || name === 'destacado'){

        if(value === 'true'){
            value = false
        }else{
            value = true
        }

        return setFormState({ ...formState, [ name ] : value });
    }

    if (name === 'idCategoria'){

     setFormState({ ...formState, [name] :  value });
        
    }   
        
    setFormState({ ...formState, [ name ]: value });
    
    seterrorFormValid(validate ({...formState, [ name ]: value }));
          
}

const onResetForm = () => setFormState( initialForm );
    

  return {
    ...formState,
    formState,
    onInputChange,
    errorFormValid,
    onResetForm,
    formValid,
    setFormState
  }
}   