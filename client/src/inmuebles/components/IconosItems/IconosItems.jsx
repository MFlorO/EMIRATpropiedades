import { Typography, Icon, Stack } from "@mui/material"
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import SuperscriptOutlinedIcon from '@mui/icons-material/SuperscriptOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { styled } from '@mui/material/styles';

const IconosItems = ({ p }) => {
  return (
    <>

      <StackItem>
        <Icon><SuperscriptOutlinedIcon/></Icon><Typography variant="p">{p?.mt2}</Typography>
      </StackItem>

      <StackItem>
        <Icon><CalendarMonthOutlinedIcon/></Icon><Typography variant="p">{p?.antiguedad} Antiguedad</Typography>
      </StackItem>

      <StackItem>
        <Icon><ShowerOutlinedIcon/></Icon><Typography variant="p">{p?.baños} Baños</Typography>
      </StackItem>

      <StackItem>
        <Icon><HotelOutlinedIcon/></Icon><Typography variant="p">{p?.dormitorios} Dormitorios</Typography>
      </StackItem>

      <StackItem>
        <Icon><DirectionsCarOutlinedIcon/></Icon><Typography variant="p">{p?.cochera} Cocheras</Typography>
      </StackItem>
      
      { p?.pileta === true && 
      <StackItem direction='row' alignItems='center'>
        <Icon><PoolOutlinedIcon/></Icon><Typography variant="p">{p?.pileta} Pileta</Typography>
      </StackItem >
      }
      
    </>
  )
}

export default IconosItems;



const StackItem = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems:'end',
  gap: 0.5
}));
