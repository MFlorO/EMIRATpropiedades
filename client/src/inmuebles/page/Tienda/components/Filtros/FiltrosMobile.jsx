import { Drawer, Grid, IconButton, List } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import FiltrosItems from './FiltrosItems/FiltrosItems';



const FiltrosMobile = ({openDrawer, setOpenDrawer}) => {

  const toggleDrawer = () => () => setOpenDrawer(!openDrawer);

  return (
    <Drawer anchor='left' variant='temporary' open={openDrawer} onClose={toggleDrawer}>
     <Grid paddingTop='1rem'>
     <Grid borderBottom='solid 2px #DBDBDB' paddingBottom='1rem'>
       <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{color:'black'}}><CloseIcon /></IconButton>
       <FiltrosItems />
     </Grid>
     <List>

     </List>
     </Grid>
   </Drawer>
  )
}

export default FiltrosMobile