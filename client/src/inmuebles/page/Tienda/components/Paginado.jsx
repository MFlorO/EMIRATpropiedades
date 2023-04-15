import { Stack, Pagination, useTheme } from "@mui/material"


const Paginado = () => {
  const theme = useTheme();
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" 
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
    </Stack>
  ) 
}

export default Paginado