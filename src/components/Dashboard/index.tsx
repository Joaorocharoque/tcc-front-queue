import { Container } from "../Dashboard/styles";
import { Summary } from "../Summary";
import { QueueTable } from "../QueueTable";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <QueueTable/>
        </Container>
    );
}