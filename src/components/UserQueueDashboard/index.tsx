import { UserProvider } from "../../hooks/useUsers";
import { Summary } from "../Summary";
import { Container } from "../UserQueueDashboard/styles";
import { UserQueueSummary } from "../UserQueueSummary";

export function UserQueueDashboard() {
    return (
        <Container>
            <UserQueueSummary />
        </Container>
    );
}