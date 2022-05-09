import React, { useState } from 'react';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Button, Dialog, DialogTitle, Box} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Teksti from '../Vastaukset/Teksti';


export default function Vastauslomake(props) {

    const [kysymykset, setKysymykset] = useState([])
    const [vastaukset, setVastaukset] = useState([])
    const [kysely, setKysely] = useState(props.kysely)
    const [open, setOpen] = useState(false)

  

// näytetään kyselyn kysymykset
const kyselynKysymykset = () =>{
    setKysymykset(kysely.kysymykset)
    setOpen(true)
}

//Tehdään POST-pyyntö jotta vaastaukset tallennetaan json-muodossa
//haluttuun osoitteeseen
   const vastaaKyselyyn = (kysely) => {
        
        const postOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json',
                        'Content-Type': 'application/json' },
            body: JSON.stringify(kysely)
        };
        fetch("http://localhost:8080/api/vastaukset", postOptions )
        .catch(err=>console.log(err))


 // Vastausten tyhjennys
        setVastaukset([])
        setKysely(kysely)
    }

//Asetetaan vastaukset kyselylle objektilistaksi   
    const tallennaVastaukset = () => {
        const Vastaukset = Object.entries(vastaukset).map(([id, vastaus]) => ({id,vastaus}));
        setKysely(kysely.vastaukset =  Vastaukset)
        vastaaKyselyyn(kysely) 
        setOpen(false)                 
    }


    // mahdollistaa valinnat (aktiiviset toiminnot esim. tekstinsyötön lomakkeeseen ja vastausvalinnat sekä kyselyn avaamisen)
    const tekstinSyotto = (e, kysymysid) => {
        console.log(e)
        setVastaukset({...vastaukset, [kysymysid]: e.target.value})
    }

    const keskeytaKysely = () =>{
        setOpen(false)
    }



    //________VASTAUSLOMAKE _____________________________________________________________________________________
    
 
    return (
        <Box>
            <Button color='primary' endIcon={<QuestionAnswerIcon/>} onClick={()=>kyselynKysymykset()}>Vastaa Kyselyyn {kysely.nimi} </Button>

            <Dialog open={open} onClose={keskeytaKysely}  >


                <DialogTitle sx={{fontSize:'2.5rem'}}>{kysely.nimi}</DialogTitle>

                 {/* FormControl: vastauslomakkeen marginaalit */}
                <FormControl component="fieldset" sx={{marginLeft: 3, marginRight: 3}}>
                
                {/*huom ilman tekstinSyotto={tekstinSyotto} vastausta ei voida lähtettää tallennettavaksi  */}
                {kysymykset.map((kysymys, i) => {

               switch (kysymys.vastaustyyppi){
                case 'teksti':
                            return( <Teksti key={i} kysymys={kysymys} tekstinSyotto={tekstinSyotto}/> )                    
                
                            default:
                                console.log(`Jonkun kysymyksen tyyppiä ei voitu lukea `)
                                return(<div></div>);
}})}
           
            <Box sx={{ '& button': { m: 1.5 }, justifyContent: 'center' } }>
            <Button color="primary" onClick={tallennaVastaukset} sx={{marginBottom: 0.4}} variant="contained"  >Lähetä vastaus</Button>
            <Button color="warning" onClick={keskeytaKysely} sx={{marginBottom: 1.5}}  > Keskeytä kysely</Button>
            </Box >
            </FormControl>
            </Dialog>
        </Box> )}  