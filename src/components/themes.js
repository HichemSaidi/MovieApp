
import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body:"#fff",
    fontColor: "#000000",
    WrapperColor:"#60A5FA",
    titleColor: "#FFFFFF",

    
}

export const darkTheme = {
    body:"#4B5563",
    fontColor: "#FFFFFF",
    WrapperColor:"#1F2937",
    inputBorder: "none",
    titleColor: "#FFFFFF",
}

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
   
}
input{
    border:${(props) => props.theme. inputBorder};
}
h1{
    color:${(props) => props.theme.titleColor}
}
`;
