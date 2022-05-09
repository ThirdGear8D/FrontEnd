import {TextField, Box } from "@mui/material";

export default function Teksti(props){

    const { kysymys } = props;
    
    return (
        <Box sx={{marginBottom: 6}}>
                <TextField
                required = {kysymys.pakollinen ===true}             
                label={kysymys.kysymysteksti}
                onChange={e => props.tekstinSyotto(e, kysymys.id)}
                fullWidth
                multiline
                margin= 'dense'
                InputLabelProps={{                
                }}/>
         </Box>)  
    
}