import { Container } from "./styles"

import scrollImg from  "../../assets/img/scroll_icon.png";

export function About() {
    return (
        <Container id="about">
            <h1>Hello World</h1>
            <img src={scrollImg} alt="Ícone de Scroll" />
        </Container>
    );
}
