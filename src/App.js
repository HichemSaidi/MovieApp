import React, { useState } from 'react';
import Main from './components/Main';
import Details from './components/Details';
import { ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles} from "./components/themes"
import styled from 'styled-components';
import { BrowserRouter , Route,} from "react-router-dom";




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
position: absolute;
margin-right:10px;
right:0;
`;
const Nav_Title= styled.p`
      font-size:30px;  
      margin-top: auto;
      font-weight: 700;
  `;

  return (

    <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
       <Wrapper>
                     <Nav_Title>Movies</Nav_Title> 
                     <Toggler onClick={()=> themeToggler()}>Theme</Toggler>
       </Wrapper>
    <BrowserRouter>
      <Route exact path ="/" component = {Main} />
      <Route path ="/:id" component = {Details}/>
      
      </BrowserRouter>
     
     
    </ThemeProvider>
     

  )
}
