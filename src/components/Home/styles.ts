import styled from "styled-components";

interface StylesProps {
    isLoaded: boolean;
}

export const Container = styled.section<StylesProps>`
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

        transform: translateY(-120%);
        
        animation-name: ${props => props.isLoaded ? 'headerToBottom' : ''};
        animation-duration: 3s;
        animation-fill-mode: forwards;

        @keyframes headerToBottom {
            from {transform: translateY(-120%)}
            to {transform: translateY(0%)}
        }
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

export const AboutMeSection = styled.main<StylesProps>`
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

        h1 {
            margin-top: -5rem;
            margin-bottom: 1rem;
            font-size: 9rem;
            font-weight: 500;
            opacity: 0;

            animation-name: ${props => props.isLoaded ? 'opacity' : ''};
            animation-duration: 1500ms;
            animation-fill-mode: forwards;
        }

        p {
            font-size: 1.5rem;
            font-weight: 300;
            opacity: 0;

            animation-name: ${props => props.isLoaded ? 'opacity' : ''};
            animation-duration: 5500ms;
            animation-fill-mode: forwards;
        }

        @keyframes opacity {
            from {opacity: 0}
            to {opacity: 1}
        }
    }
    
    a {
        height: 90%;
        transition: all 200ms;
        transform: translateY(100%);

        animation-name: ${props => props.isLoaded ? 'introImage' : ''};
        animation-duration: 4s;
        animation-fill-mode: forwards;
    }
    
    a img {
        height: 100%;
        -webkit-filter: grayscale(100%);
        transition: all 200ms;
    }

    img:hover {
        -webkit-filter: grayscale(0);
        cursor: pointer;
        transition: all 200ms;
    }
    
    @keyframes introImage {
        from {transform: translateY(100%)}
        to {transform: translateY(0%)}
    }
`;
