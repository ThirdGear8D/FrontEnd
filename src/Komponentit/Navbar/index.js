import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                SurveyPoint
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/" 
                  activeStyle={{ color:'#404141' }}
                >
                    Kyselyt
                </NavLink>
                <NavLink 
                  to="/raportit" 
                  activeStyle={{ color: 'black' }}
                >
                    Raportit
                </NavLink> 
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
//lainattu: https://dev.to/stephanieopala/simple-navigation-bar-in-react-js-4d5m

