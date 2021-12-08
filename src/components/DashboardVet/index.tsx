import { VetTable } from "../VetTable";
import { Container  } from "./styles";
import {VeterinarySummary} from "../VeterinarySummary";

export function DashboardVet() {
    return (
        <Container>
            <VeterinarySummary/>
            <VetTable/>
        </Container>
    );
}