import {Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';



const titulo = ["status", "id", "Nombre", "Direccion", "Descripción", "Precio", "Modena", "Fecha de Publicación", "Oferta"]



const TablaInmuebleCategorias = ({i}) => {

  const { status, id, nombre, descripcion, precio, moneda, imagen, fechaPublicacion} = i
  const filas = {status, id, nombre, descripcion, precio, moneda, imagen, fechaPublicacion}

  return (
  <TableContainer sx={{border: "1px solid"}}>
    <Table>
    <TableBody>
    <TableRow>
      {Object.values(filas)?.map((row, index) => <TableCell align="center"  key={index} style={{ minWidth:'max-content' }} >{row}</TableCell> )}
    </TableRow>
    </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TablaInmuebleCategorias