import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --green: #7FFFD4;
        --background-white: #f0f8ff;
        --background-black: #282C34;
        --gray-light: rgba(120,120,120);
        --gray-dark: rgba(60,60,60);
    };

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        list-style: none;

        text-decoration: none;
    };

    a {
        color: inherit;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    };

    html::-webkit-scrollbar {
        display: none;
    }

    h1, h2 {
        font-family: 'Oswald', sans-serif;
    };
`;
