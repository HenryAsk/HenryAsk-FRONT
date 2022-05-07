import React from "react";
/*-----------IMPORT Components-----------*/
import PanelTable from "../Components/PanelAdmin/PanelTable"; 
import PanelReport from "../Components/PanelAdmin/PanelReport";
/*-----------IMPORT MUI & CSS-----------*/
import { Box } from "@mui/system";
import { Grid, Typography , TextField} from "@mui/material";
import { TituloForo } from "../Components/Style/StyledComponents";


export default function PanelAdm(){

    // SELECT ROL PANEL TABLE
    /* const [role, setRole] = React.useState('');
    const handleChangeRole = (event: any) => {
        console.log(event.target.value)
      setRole(event.target.value);
    }; */
    // -----------------//

    return (
        <Box
        width="100%"
        display="flex"
        justifyContent="center"
        sx={{minHeight:`90vh`}}>
        <Box
        width="93vw"
        sx={{border:"1px solid blue"}}>
        <Grid container spacing={2} sx={{marginBottom:"5rem"}}>
            <Grid item xs={12}>
                <Typography variant="h3" component="div">Panel de <TituloForo>Administrador</TituloForo>.</Typography>
            </Grid>
            
            <Grid item xs={12} sx={{display:"flex", justifyContent:"flex-end" , alignItems:"center"}}>
            <Typography variant="h6" component="div" sx={{border:"1px solid rgb(255,255,0)", padding:"0.58em" , borderRadius:"10px", backgroundColor:"rgb(255,255,0)", fontWeight:"bold"}}>Busqueda por usuario:</Typography>
            <TextField
                label="Nombre de Usuario"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
            />
            </Grid>
            <Grid item xs={6} sx={{display:"flex" , alignItems:"center"}}>
                <Typography variant="h5" component="div">Post reportados:</Typography>
            </Grid>
            <Grid item xs={6} sx={{display:"flex" , alignItems:"center"}}>
                <Typography variant="h5" component="div">Administrar roles de usuarios:</Typography>
            </Grid>
            <Grid item xs={6}>
                <PanelReport/>
            </Grid>
            <Grid item xs={6}>
                <PanelTable/>
            </Grid>
        </Grid>
        
        </Box>
        </Box>
        
    )
}