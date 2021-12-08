import { SecTable } from "../SecTable";
import { Container } from "./styles";
import {EmployeeSummary} from "../EmployeeSummary";

export function DashboardSec() {
    return (
        <Container>
            <EmployeeSummary/>
            <SecTable/>
        </Container>
    );
}