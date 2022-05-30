import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    background-color: var(--background-black);

    position: relative;
    overflow: hidden;
    
    > h1 + img {
        position: absolute;
        right: 50%;
        bottom: 1rem;
        width: 5rem;
        filter: invert(96%) sepia(58%) saturate(1742%) hue-rotate(178deg) brightness(110%) contrast(105%);
    }
`;
