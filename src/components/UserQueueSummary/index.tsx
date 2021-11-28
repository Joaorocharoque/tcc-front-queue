import { useQueue } from "../../hooks/useQueue";
import { Container } from "./styles";

export function UserQueueSummary() {
    const { queue } = useQueue()

    const query = new URLSearchParams(window.location.search); 
    const queueItemId = query.get('queueItemId')

    return (
        <Container>
            {
                queue.filter(q => q.id === Number(queueItemId))
                .map(queueItem => (
                    <>
                    <div>
                        <header>
                            <p>Sua Posição na Fila</p>
                        </header>
                        <strong>
                            {queueItem.position}
                        </strong>
                    </div>
                    <div>
                        <header>
                            <p>Pet</p>
                        </header>
                        <strong>
                            {queueItem.customer.pets[0].name}
                        </strong>
                    </div>
                    <div className="highlight-background">
                        <header>
                            <p>Tempo de Espera Aproximado</p>
                        </header>
                        <strong>
                            10
                        </strong>
                    </div>
                    </>
                    )
                )
            }
        </Container>
    )
}