import { Container } from "./styles";
import {useQueue} from "../../hooks/useQueue";

export function QueueTable() {
    const { queue } = useQueue()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Nome</th>
                        <th>Pet</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        queue.map(queueItem => (
                            <tr key={queueItem.id}>
                                <td>{queueItem.position}</td>
                                <td>{queueItem.customer.firstName}</td>
                                <td>Cher</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}