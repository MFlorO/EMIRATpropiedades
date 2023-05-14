import {Table, TableBody, TableCell, TableContainer, TableRow, TableHead, useTheme } from '@mui/material';


const titulo = ["status", "id", "Direccion", "Descripción", "Precio", "Moneda", "Fecha de Publicación", "imagenes" ]



const TablaInmuebleCategorias = ({inmuebles}) => {
  const theme = useTheme()
  const { status, id, direccion, descripcion, precio, moneda, imagen, fechaPublicacion} = inmuebles
  const filas = {status, id, direccion, descripcion, precio, moneda, fechaPublicacion, imagen }
  
return (
  <TableContainer sx={{border: `1px solid ${theme.palette.background.dark}`, p:0.2 }}>
  <Table>
   <TableHead>
    <TableRow>
      {titulo.map ( t => <TableCell align="center" key={t}>{t}</TableCell>)} 
    </TableRow>
   </TableHead>


  <TableBody key={id}>
    <TableRow>
    {Object.values(filas)?.map((row, index) => <TableCell align="center" key={index} style={{ minWidth:'max-content' }}>{row}</TableCell> )}
    </TableRow>
  </TableBody>

  </Table>
  </TableContainer>
  )
}
export default TablaInmuebleCategorias;