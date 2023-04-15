import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#281D44',
    },
    secondary: {
      main: '#C39315',
    },
    background:{
      main: '#F8F8F8'
    }
  },
  typography: {
    h1:{
      fontFamily: 'Montserrat',
      fontWeight:  600,
      fontSize: '24px'
    },
    h2:{
      fontFamily: 'Montserrat',
      fontWeight:  600,
      fontSize: '18px'
    },
    h3:{
      fontFamily: 'Montserrat',
      fontWeight:  400,
      fontSize: '18px'
    },
    h4:{
      fontFamily: 'Montserrat',
      fontWeight:  400,
      fontSize: '15px'
    },
    h5:{
      fontFamily: 'Montserrat',
      fontWeight:  200,
      fontSize: '15px'
    },
    p:{
      fontFamily: 'Montserrat',
      fontWeight:  400,
      fontSize: '13px'
    },
  }
});

export default theme