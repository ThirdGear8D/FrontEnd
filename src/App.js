import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Kyselyt from "./UI/Kyselyt";


// Polut --tällä hetkellä vain yksi sivu, jolla näkyy kyselyt
function App() {
  return (
    <BrowserRouter>         
        <Switch>   
          <Route exact path='/'><Kyselyt /></Route>     
         <Route exact path='/kyselyt'><Kyselyt /></Route>        
        </Switch>     
    </BrowserRouter>     
  );
}

export default App;

