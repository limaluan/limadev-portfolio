import styled from "styled-components";

export const Container = styled.section`
    background-color: var(--background-white);
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-areas: 'header'
    'content';
    grid-template-rows: 10vh 90vh;
    
    header {
        grid-area: 'header';
        
        padding: 2rem 8rem 0 5rem;
        background-image: linear-gradient(rgba(50,50,50,0.25) 5%, rgba(0,0,0,0) 95%);

        display: flex;
        justify-content: space-between;
    };

    ul {
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: flex-end;

        li {
            font-size: 2rem;
            color: var(--gray-dark);
        }
        
        li:hover {
            color: var(--gray-light);
            transition: all 200ms;
        }
        
        li:not(:last-child) {
            margin-right: 3rem;
        }
    };

    > img {
        position: fixed;
        right: 50%;
        bottom: 1rem;
        width: 5rem;
        /* filter: invert(96%) sepia(58%) saturate(1742%) hue-rotate(178deg) brightness(110%) contrast(105%); */
    }
`;

export const LogoContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    width: 100px;
    height: 100%;

    > img {
        width: 80%;
        position: absolute;

        :first-child {
                @keyframes rotatingImage {
                from {transform: rotate(0deg)}
                to {transform: rotate(360deg)}
            }
            
            animation: rotatingImage 100s infinite linear;
        }
        
        :last-child {
            width: 50%;
            transform: translate(1%, 2%);
        }
    }
`;

export const AboutMeSection = styled.main`
    grid-area: 'content';
    width: 90%;
    height: 100%;
    margin: auto;
    
    position: relative;
    display: flex;
    align-items: flex-end;

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        height: 100%;
        /* background-color: blue; */

        h1 {
            margin-top: -5rem;
            margin-bottom: 1rem;
            font-size: 9rem;
            font-weight: 500;
        }

        p {
            font-size: 1.5rem;
            font-weight: 300;
        }
    }
    
    img {
        height: 90%;
        -webkit-filter: grayscale(100%);
        transition: all 200ms;
        /* background-color: green; */
    }

    img:hover {
        -webkit-filter: grayscale(0);
        cursor: pointer;
        transition: all 200ms;
    }
    
    /* background-color: aquamarine; */
`;
