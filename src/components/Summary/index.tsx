import { Container } from "./styles";
import {useQueue} from "../../hooks/useQueue";

export function Summary() {
    const { queue } = useQueue()
    
    const summary = queue.reduce((acc, queueItem) => {
        acc.averageTime += 20;

        return acc;
    }, {
        totalInQueue: 0,
        totalVets: 0,
        averageTime: 0,
    })

    summary.totalInQueue = queue.length;
    summary.totalVets = 10;
    
    return (
        <Container>
            <div>
                <header>
                    <p>Total de Pessoas na Fila</p>
                </header>
                <strong>
                    {summary.totalInQueue}
                </strong>
            </div>
            <div>
                <header>
                    <p>Total de Veterinários</p>
                </header>
                <strong>
                    {summary.totalVets}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Tempo Médio de Atendimento</p>
                </header>
                <strong>
                    {summary.averageTime}
                </strong>
            </div>
        </Container>
    )
}