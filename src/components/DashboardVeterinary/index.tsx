import { TableVeterinary } from "../TableVeterinary";
import { Container  } from "./styles";
import {SummaryVeterinary} from "../SummaryVeterinary";

export function DashboardVeterinary() {
    return (
        <Container>
            <SummaryVeterinary/>
            <TableVeterinary/>
        </Container>
    );
}