// import { Grid } from "@mui/material";

import { useDispatch } from "react-redux";
import { uploadImage } from "~/redux/actions/admin";



const TerceraParteFormulario = ({ imagen, setimagen}) => {

    const dispatch = useDispatch()


    const setImage = (value) => {
        setimagen([...imagen, ...value ]);
    
        // setError(
        //   validate({
        //     ...formState,
        //     imagen: value,
        //   })
        // );
    };
    
    const handleFileInputChange = (e) => {
        const files = e.target.files[0];

        console.log(files)

        const reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onloadend = () => {
            dispatch(
            uploadImage([reader.result], setImage, "La imagen se cargó correctamente", "Error al cargar la imagen!")
          );
        };
      };
    
      

  return (
//  <Grid container direction='row' alignItems='center'>
    <input type='file' multiple label="Imagen" name="imagen" accept="image/*" onChange={handleFileInputChange} color="secondary" />
//  </Grid>
  )
}

export default TerceraParteFormulario