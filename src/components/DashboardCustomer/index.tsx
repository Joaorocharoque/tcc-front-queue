import { Container } from "../Dashboard/styles";
import { CustomerTable } from "../CustomerTable";
import {Summary} from "../Summary";
import {CustomerSummary} from "../CustomerSummary";

export function DashboardCustomer() {
    return (
        <Container>
            <CustomerSummary />
            <CustomerTable/>
        </Container>
    );
}