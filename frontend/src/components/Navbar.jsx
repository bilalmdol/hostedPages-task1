import { AppBar,IconButton,Toolbar, Typography } from "@mui/material";

const Navbar=()=>{
    return(
        <>  
            <AppBar position='static'>
                <Toolbar>
                    <IconButton>
                        {/* <CatchingPokemonIcon/> */}
                    </IconButton>
                    <Typography variant='h6'  component='div'>
                        Ordway signup 
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;