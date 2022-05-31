import { useLoading } from "../../hooks/useLoading";
import { Container } from "./styles";

export default function LoadingScreen() {
    const { closeLoading } = useLoading();

    return (
        <Container closeLoading={closeLoading}>
            <div>
                <div></div>
            </div>
        </Container>
    );
}
