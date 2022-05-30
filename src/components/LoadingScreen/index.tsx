import { useLoading } from "../../hooks/useLoading";
import { Container } from "./styles";

export default function LoadingScreen() {
    const { closeLoading } = useLoading();

    return (
        <Container closeLoading={closeLoading}>
            <div>
                <h1>Carregando...</h1>
                <div></div>
            </div>
        </Container>
    );
}
