import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::after, *::before {
    box-sizing:border-box;
   
}
main {
    display: grid;
 
}
body {
    margin: 0;
   display: block;
   background-color: aliceblue;
    @media only screen and (min-device-width: 480px){
    gap: 4rem;
    
}
@media (max-width: 600px) {
    .grid {
       width: 100%;
       flex-direction: column;
    }}}
`;
