import { Container } from "./styles";
import {useQueue} from "../../hooks/useQueue";
import { useUsers } from "../../hooks/useUsers";

export function Summary() {
    const { queue } = useQueue()
    const { users } = useUsers()
    
    const queueSummary = queue.reduce((acc, queueItem) => {
        acc.averageTime += 20;

        return acc;
    }, {
        totalInQueue: 0,
        averageTime: 0,
    })

    const usersSummary = users.reduce((acc, userItem) => {
        if(userItem.category == "VETERINARY" ){
            acc.totalVets = acc.totalVets + 1
        }
        return acc;
    }, {
        totalVets: 0
    })

    queueSummary.totalInQueue = queue.length;
    
    return (
        <Container>
            <div>
                <header>
                    <p>Total de Pessoas na Fila</p>
                </header>
                <strong>
                    {queueSummary.totalInQueue}
                </strong>
            </div>
            <div>
                <header>
                    <p>Total de Veterinários</p>
                </header>
                <strong>
                    {usersSummary.totalVets}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Tempo Médio de Atendimento</p>
                </header>
                <strong>
                    {queueSummary.averageTime}
                </strong>
            </div>
        </Container>
    )
}