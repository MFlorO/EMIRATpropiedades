import { CircularProgress, Grid } from "@mui/material"

const Loading = () => {
  return (
    <Grid position='absolute' top='40rem' left='50rem'>
        <CircularProgress color="secondary" />
    </Grid>
  )
}

export default Loading