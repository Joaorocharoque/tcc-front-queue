import { Container } from ".//styles";
import { SummaryQueue } from "../SummaryQueue";
import { TableQueue } from "../TableQueue";
import { UserProvider } from "../../hooks/useUsers";

export function DashboardQueue() {
    return (
        <Container>
            <UserProvider>
                <SummaryQueue />
            </UserProvider>
            <TableQueue/>
        </Container>
    );
}