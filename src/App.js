import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Kyselyt from "./UI/Kyselyt";
import Navbar from "./Komponentit/Navbar";
import Vastaustenraportointi from "./Vastaukset/Vastaustenraportointi";


// Polut --tällä hetkellä vain yksi sivu, jolla näkyy kyselyt
function App() {
  return (
    <BrowserRouter>    
        <Navbar />     
        <Switch>   
        <Route path="/" exact component={Kyselyt} />
        <Route path="/raportit" component={Vastaustenraportointi} />       
        </Switch>     
    </BrowserRouter>     
  );
}

export default App;

