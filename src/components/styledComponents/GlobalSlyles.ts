import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    
@font-face {    
font-family: 'Yazo';
src: local('Yazo') url('./fonts/Yazo/Yazo.woff2') format('woff2');
font-weight: 400;
font-style: normal;
font-display: swap;
}
    
@font-face {    
font-family: 'Jaro';
src: local('Jaro') url('./fonts/Jaro/Jaro-Regular-VariableFont_opsz.ttf') format('truetype');
font-weight: 400;
font-style: normal;
font-display: swap;
}


@font-face {    
font-family: 'Hand Writing Cyr';
src: local('Hand Writing Cyr') url('./fonts/Hand Writing Cyr/HandWriting_1.otf') format('opentype');
font-weight: 400; 
font-style: normal;
font-display: swap;
}
`
