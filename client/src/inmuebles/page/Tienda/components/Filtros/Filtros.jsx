import { useState } from 'react';
import FiltrosMobile from './FiltrosMobile';
import FiltrosItems from './FiltrosItems/FiltrosItems';
import { useTheme, useMediaQuery, Typography, Grid, Button } from '@mui/material';






const Filtros = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  //Capto el breakpoints

  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <Grid container p={{xs:0,sm:2}} direction='column' gap={{ xs:'0', sm:1 }}>

    { isSmallScreen ? 

      // FILTROS PARA MOBILE 
    <>
    <Button variant='contained' onClick={() => setOpenDrawer(!openDrawer)}><Typography variant="h3">FILTROS</Typography></Button>
    <FiltrosMobile openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
     
      //  FILTROS PARA DESKTOP 
     : 
     
     <>
      <Typography variant='h2' textAlign='center'>Filtros</Typography>
      <FiltrosItems />
     </>

    }

    </Grid>
  )
}

export default Filtros