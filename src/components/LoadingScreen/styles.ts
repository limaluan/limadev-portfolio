import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    
    z-index: 2;

    background-color: var(--background-black);

    animation-name: closingLoader;
    animation-duration: 6s;
    animation-fill-mode: forwards;
    
    h1 {
        color: var(--background-white);
        font-size: 8rem;
        font-weight: 300;
    }
    
    div {
        width: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    div > div {
        background-color: white;
        width: 0%;
        height: 1rem;

        margin-top: 2rem;
        border-radius: 3rem;

        animation-name: loadingBar;
        animation-duration: 5s;
        animation-fill-mode: forwards;
    }
    
    @keyframes loadingBar {
        from {width: 0}
        to {width: 100%}
    }

    @keyframes closingLoader {
        50% {opacity: 1}
        100% {opacity: 0}
    }
`;
