import './App.css'
import { TextField, Button, Stack, Container } from "@mui/material"

function App() {

  return (
    <>
      <Container maxWidth={"sm"}>
        <h2>Ordway's Registeration Form!</h2>
        <Stack spacing={3} >
          <TextField id="fname" label="First Name" variant='outlined' />
          <TextField id="lname" label="Last Name" variant='outlined' />
          <TextField id="email" label="Email" variant='outlined' />
          <TextField id="phone" label="Phone" variant='outlined' />
          <TextField id="city" label="City" variant='outlined' c />
          <Button variant="contained" style={{
            backgroundColor: "rgb(255, 155, 0)",
            width: "20px",

          }}>Save</Button>

        </Stack>
      </Container>
    </>
  )
}

export default App;
