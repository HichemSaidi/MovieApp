import React, { useState } from 'react';
import Main from './components/Main';
import Details from './components/Details';
import Movie from './components/Movie';
import { ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles} from "./components/themes"
import styled from 'styled-components';
import { BrowserRouter , Route,useHistory} from "react-router-dom";
import Switch from "react-switch";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';



export default function App() {
 const [theme, setTheme ]= useState("light");
 const themeToggler = ()=>{
   theme === "light" ? setTheme("dark") : setTheme("light");
 };



 const Wrapper = styled.section`
      height:50px;
      display: flex;
      justify-content: center;
      align-items: center;  
      background-color: ${(props) => props.theme.WrapperColor};
      `;

const Toggler = styled.button`
border-radius:60px;
width:15px;
height:15px;
margin-right:8px;
margin-left:10px;
border:none;

`;
const Nav_Title= styled.h1`
      font-size:30px;  
      margin-top: auto;
      font-weight: 700;
      color: "#FFFFFF";
  `;
  const  Btn_togle = styled.div`
  display:flex;
  position: absolute;
  align-items:center;
  right:0;
  margin:10px;
  color:white;
  font-size:10px;
  `;

  return (

    <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
       <Wrapper>
                     <Nav_Title>Movies</Nav_Title> 
                     <Btn_togle><WbSunnyIcon></WbSunnyIcon> <Toggler onClick={()=> themeToggler()}></Toggler> <Brightness3Icon></Brightness3Icon></Btn_togle> 
                      
                    
                    
       </Wrapper>
    <BrowserRouter>
      <Route exact path ="/" component = {Main} />
      <Route path ="/:id" component = {Details}/>
      </BrowserRouter>
     
     
    </ThemeProvider>
     

  )
}
