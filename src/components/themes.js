
import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body:"#fff",
    fontColor: "#FFFFFF",
    WrapperColor:"#61a5fa",

    
}

export const darkTheme = {
    body:"#4c5562",
    fontColor: "#FFFFFF",
    WrapperColor:"#212936",
    inputBorder: "none",
}

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
   
}
input{
    border:${(props) => props.theme. inputBorder};
}
`;
