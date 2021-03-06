import { useQueue } from "../../hooks/useQueue";
import { Container } from "./styles";

export function SummaryUserQueue() {
    const { queue } = useQueue()

    const query = new URLSearchParams(window.location.search); 
    const queueItemId = query.get('queueItemId')

    return (
        <Container>
            {
                queue.filter(q => q.id === Number(queueItemId))
                .map(queueItem => (
                    <>
                    <div className="highlight-background">
                        <header>
                            <p>Espera Aproximado</p>
                        </header>
                        <strong>
                            {queueItem.estimatedRemainingTime} min
                        </strong>
                    </div>
                    <div>
                        <header>
                            <p>Sua posição é</p>
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
                    </>
                    )
                )
            }
        </Container>
    )
}