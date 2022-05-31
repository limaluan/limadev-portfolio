import styled from "styled-components";

interface ILoadingScreenProps {
    closeLoading: boolean;
}

export const Container = styled.section<ILoadingScreenProps>`
    width: 100vw;
    height: 100vh;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    
    z-index: 2;

    background-color: var(--background-black);

    animation-name: ${props => props.closeLoading ? 'closingLoader' : ''};
    animation-duration: 4s;
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
        border: 1rem solid gray;
        border-top: 1rem solid cyan;
        width: 10rem;
        height: 10rem;

        margin-top: 2rem;
        border-radius: 5rem;

        animation: loadingCircle 2s infinite linear;
    }
    
    @keyframes loadingCircle {
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
    }

    @keyframes closingLoader {
        50% {opacity: 1}
        100% {opacity: 0}
    }
`;
