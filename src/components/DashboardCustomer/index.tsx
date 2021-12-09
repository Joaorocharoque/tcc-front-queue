import { Container } from "../DashboardQueue/styles";
import { TableCustomer } from "../TableCustomer";
import {SummaryQueue} from "../SummaryQueue";
import {SummaryCustomer} from "../SummaryCustomer";

export function DashboardCustomer() {
    return (
        <Container>
            <SummaryCustomer />
            <TableCustomer/>
        </Container>
    );
}