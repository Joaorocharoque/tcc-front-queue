import { TableEmployee } from "../TableEmployee";
import { Container } from "./styles";
import {SummaryEmployee} from "../SummaryEmployee";

export function DashboardEmployee() {
    return (
        <Container>
            <SummaryEmployee/>
            <TableEmployee/>
        </Container>
    );
}