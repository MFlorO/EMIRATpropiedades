import { Drawer, Grid, IconButton, List } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import FiltrosItems from './FiltrosItems/FiltrosItems';



const FiltrosMobile = ({openDrawer, setOpenDrawer}) => {

  const toggleDrawer = () => () => setOpenDrawer(!openDrawer);

  return (
    <Drawer anchor='left' variant='temporary' open={openDrawer} onClose={toggleDrawer}>

     <Grid container padding='1rem' gap={3}>
       <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{color:'black'}}><CloseIcon /></IconButton>
       <FiltrosItems />
     </Grid>

   </Drawer>
  )
}

export default FiltrosMobile