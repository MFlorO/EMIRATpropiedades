import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminLayOut } from "~/Admin/layout"
import CategoriaLayOut from "../../../layout/CategoriaLayOut";
// import { useForm } from "../../../Hook";
// import { validacionFormularioCategoria } from "~/functions/validacionFormulario";
import { Grid, Paper, TextField } from "@mui/material";



// const formData = {
//   nombre: ''
// }



const CrearCategoria = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const { nombre, onInputChange, errorFormValid, formValid } = useForm(formData, validacionFormularioCategoria)
  

  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(PostCategorias({nombre}));
    navigate(`/dashboard/admin/categorias`)
  }


  const botonDisabled = formValid() || (nombre.length === 0) ? true : false
 

  return (
    <AdminLayOut>
      <Grid container sx={{minHeight:'70vh',alignItems:'center', justifyContent: 'center'}}>
  
      {/* <Grid item xs={10} sm={4}>
        <Paper sx={{ p: 2, display: "flex", justifyContent:'center', alignItems:'center'}}>

        <CategoriaLayOut titulo='CREAR UNA CATEGORIA' boton='CREAR' onSubmit={onSubmit} botonDisabled={botonDisabled}>
         <TextField
            label="Nombre"
            name="nombre" 
            value={nombre} 
            onChange={onInputChange} 
            error={formValid()}
            helperText={errorFormValid.nombre}
          />
        </CategoriaLayOut>

        </Paper>
      </Grid> */}
  
      </Grid>
    </AdminLayOut>
  )
}

export default CrearCategoria;