import { Fragment, useState, useEffect } from 'react'
// import useCategorias from '../../../../../Hook/useCategorias'
import { Button, Grid, Typography } from '@mui/material'



const FiltrosPorCategoria = () => {

  // const categorias = useCategorias()
  // const [categoriaCopia, setcategoriaCopia] = useState(categorias)
  // const categoria6 = categoriaCopia.slice(0,6)
  // const [verMas, setVerMas] = useState(categoriaCopia)
  
  // useEffect(() => {
  //   setcategoriaCopia(categorias)
  //   setVerMas(categoria6)
  // }, [ categoriaCopia, categorias ])

  // const onMostrar = () => verMas.length <= 6 ? setVerMas(categoriaCopia) : setVerMas(categoria6)

  return (
    <Grid>
      {/* {verMas?.map( c => (
      <Fragment key={c.id}>
        <Typography>{c.nombre}</Typography>
      </Fragment>
    ))}

    <Button variant='text' onClick={(onMostrar)}>{verMas.length <= 6 ? 'Ver Más' : 'Ver Menos'}</Button> */}
    filtro por categoria
    </Grid>
  )
}

export default FiltrosPorCategoria