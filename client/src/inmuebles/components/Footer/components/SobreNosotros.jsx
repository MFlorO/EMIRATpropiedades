import { Grid, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';



const SobreNosotros = () => {
  return (
  <Grid container mt='5px' color='white' width={{xs:'85%', sm:'95%'}}>
    <StyledTypographyLink>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi quod ipsa, laborum odit aspernatur sit 
    harum ipsam fuga iste vitae aperiam, eos maxime aut odio officiis placeat reiciendis esse!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil efgd
    </StyledTypographyLink>
  </Grid>
  )
}

export default SobreNosotros;



const StyledTypographyLink = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: theme.typography.h4.fontFamily,
  fontWeight: 200,
  fontSize: '12px'
}));