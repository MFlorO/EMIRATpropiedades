import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminLayOut } from "~/Admin/layout"
import { Button, Container, Grid, Typography, useTheme } from "@mui/material";


const Perfil = () => {

  const theme = useTheme()
  const navigate = useNavigate()
  const { photoURL, displayName, email, uid } = useSelector( (state) => state.auth );

  return (
  <AdminLayOut>
  <Container>
    <Grid align='center' sx={{ p: 2, display: "flex", flexDirection: "column", height: 300, backgroundColor: theme.palette.background.dark }} gap={3}>
      <Grid container justifyContent='center' sx={{width:'100%', alt:'100%'}}><Grid sx={{width:'5rem', height:'4rem', borderRadius:'90%'}} backgroundColor={theme.palette.secondary.main} >
          <img src={photoURL} alt="foto de perfil" style={{ width:'100%', alt:'100%', borderRadius:'90px', objectFit:'cover'}}/>
      </Grid></Grid>
      <Typography>{displayName}</Typography>
      <Typography>{email}</Typography>
      <Grid container justifyContent='center' sx={{width:'100%', alt:'100%'}}>
        <Button variant="text" color="secondary" onClick={() => navigate(`/dashboard/admin/perfil/cambiarcontraseña`)}>Cambiar Contraseña</Button> 
      </Grid>
    </Grid>
  </Container>
  </AdminLayOut>
  )
}

export default Perfil;



