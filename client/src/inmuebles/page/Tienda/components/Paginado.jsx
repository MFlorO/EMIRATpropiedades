import { Grid, Pagination, useTheme } from "@mui/material"


const Paginado = () => {
  const theme = useTheme();
  return (
    <Grid item xs={10} sm={5} >
      <Pagination count={5} variant="outlined" 
      sx={{
        "& .MuiPaginationItem-root": {
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
        "& .Mui-selected": {
          borderColor: theme.palette.secondary.main,
          backgroundColor: theme.palette.secondary.main,
        },
      }}
      />
    </Grid>
  ) 
}

export default Paginado