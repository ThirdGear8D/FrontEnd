import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  
    background-image:
    url("https://img.freepik.com/free-photo/high-angle-uncompleted-checking-boxes_23-2148265488.jpg?w=1380&t=st=1652267355~exp=1652267955~hmac=9c5c7c040efee51dd73647f1ebcfc347fdcd88a70b85900ed96c5df9eb61e93c ");
    height: 250px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;

`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  font-family: Segoe UI;
  color: #404141;
  font-size: 4rem;
  text-decoration: none;
  font-weight: bold
`;

export const NavLink = styled(Link)`
color: #fff;
font-family: Segoe UI;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 2rem;
height: 100%;
cursor: pointer;
&:hover {
  color: black;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-family: Segoe UI;
  color: #404141;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  font-family: Segoe UI;
  font-size: 2rem;
  color: #404141;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  font-family: Segoe UI;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;



//lainattu (ja muokattu): https://dev.to/stephanieopala/simple-navigation-bar-in-react-js-4d5m