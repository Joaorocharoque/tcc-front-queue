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
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        queue.map(queueItem => (
                            <tr key={queueItem.id}>
                                <td>{queueItem.position}</td>
                                <td>{queueItem.name}</td>
                                <td>{queueItem.petName}</td>
                                <td>
                                    {
                                        new Intl.DateTimeFormat('pt-BR').format(new Date(queueItem.createdAt))
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}