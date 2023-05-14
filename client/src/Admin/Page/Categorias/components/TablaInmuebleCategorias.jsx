import { useDispatch } from "react-redux";
import { deleteInmueble } from "~/redux/actions/admin";
import {Table, TableBody, TableCell, TableContainer, TableRow, TableHead, useTheme, IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const titulo = ["status", "id", "Nombre", "Direccion", "Descripción", "Precio", "Moneda", "Fecha de Publicación", "imagenes" ]



const TablaInmuebleCategorias = ({inmuebles}) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  
return (
  <TableContainer sx={{border: `1px solid ${theme.palette.background.dark}`, p:0.2 }}>
  <Table>
   <TableHead>
    <TableRow>
      {titulo.map ( t => <TableCell align="center" key={t}>{t}</TableCell>)} 
      <TableCell align="center">EDITAR</TableCell>
      <TableCell align="center">ELIMINAR</TableCell>
    </TableRow>
   </TableHead>

  {
    inmuebles.map( i => {
      const { status, id, nombre, direccion, descripcion, precio, moneda, imagen, fechaPublicacion} = i
      const filas = {status, id, nombre, direccion, descripcion, precio, moneda, fechaPublicacion, imagen }
      return(
      <TableBody key={id}>
        <TableRow>
          {Object.values(filas)?.map((row, index) => <TableCell align="center" key={index} style={{ minWidth:'max-content' }}>{row}</TableCell> )}
          <TableCell><IconButton><EditIcon color="secondary"/></IconButton></TableCell>
          <TableCell><IconButton onClick={() => dispatch(deleteInmueble(id))}><DeleteIcon color="secondary"/></IconButton></TableCell>
        </TableRow>
      </TableBody>
      )
    })
  }
  </Table>
  </TableContainer>
  )
}
export default TablaInmuebleCategorias;