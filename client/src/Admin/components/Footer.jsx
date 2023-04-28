import { Box, Typography } from "@mui/material";



const Footer = () => {
  return (
    <Box sx={{display:'flex', height:'4rem', alignSelf:'end', justifyContent:'center', mt:'2rem'}}>
      <Typography variant="body2" color="text.secondary" align="center">
        Copyright © Florencia Oldani {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
