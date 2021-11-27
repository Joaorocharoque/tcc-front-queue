import { Container } from "../Dashboard/styles";
import { Summary } from "../Summary";
import { QueueTable } from "../QueueTable";
import { UserProvider } from "../../hooks/useUsers";

export function Dashboard() {
    return (
        <Container>
            <UserProvider>
                <Summary />
            </UserProvider>
            <QueueTable/>
        </Container>
    );
}