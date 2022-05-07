import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Vastauslomake from './Vastauslomake';



export default function Kyselyt() {
    const [kyselyt, setKyselyt] = useState([]);

    useEffect(() => fetchData(), []);
    const url = 'http://localhost:8080/api/kyselyt'    

    // haetaan kaikki kyselyt
    const fetchData = () => {
        fetch(url) 
        .then(response => response.json())
        .then(data => {   
            setKyselyt(data)
        }
            )
        .catch(err=>console.log(err));  
    }

    const Item = styled(Paper)(({ theme }) => ({
           
        textAlign: 'center',
        padding: theme.spacing(6)
      }));
   
    return (
        <div>
            
            <Grid containercolumnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={2} >
             {kyselyt.map((kysely,i) => {
                return (
                    <Grid item xs={15}  key={i}>
                    <Item>                   
                   {/* Kyselyn kysymyksen api propsina vastauslomakkeelle */}
                    <Vastauslomake kysely={kysely}  />             
                    </Item>
                    </Grid>
                )    
             })}
            </Grid>
        </div>
    );
}