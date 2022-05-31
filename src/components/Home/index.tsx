import { AboutMeSection, Container, LogoContent } from "./styles";

import meImg from "../../assets/img/meImg.png";
import scrollImg from "../../assets/img/scroll_icon.png";
import limaDevLogoImg from "../../assets/img/limaDev_logo.svg";
import fullstackDeveloperImg from "../../assets/img/fullstackDeveloper.svg";
import { useLoading } from "../../hooks/useLoading";


export default function Home() {
    const { handleCloseLoading, pageLoads, isLoaded } = useLoading();

    window.onload = () => {
        handleCloseLoading();
        setTimeout(() => pageLoads(), 3000);
    }

    return (
        <Container>
            <header>
                <LogoContent>
                    <img src={fullstackDeveloperImg} alt="Logo LimaDev" />
                    <img src={limaDevLogoImg} alt="Logo LimaDev" />
                </LogoContent>
                <ul>
                    <li><a href="#">Ínicio</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </header>
            <AboutMeSection isLoaded={isLoaded}>
                <section>
                    <h1>Desenvolvedor Fullstack</h1>
                    <p>Oi, meu nome é <b>Luan Lima</b>, tenho 20 anos e sou um Web Developer focado nas melhores tecnologias do mercado</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus similique nisi dolore voluptatem recusandae debitis esse minima? Aut, voluptatibus saepe.</p>
                </section>
                <a href="#about"><img src={meImg} alt="Foto do Luan" /></a>
            </AboutMeSection>
            <img src={scrollImg} alt="Ícone de Scroll" />
        </Container>
    );
}
