import { Container } from "./styles";
import { useQueue } from "../../hooks/useQueue";

import deleteImg from '../../assets/delete.png'

export function QueueTable() {
    const { queue, deleteFromQueue } = useQueue()
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Nome</th>
                        <th>Pet</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        queue.map(queueItem => (
                            <tr key={queueItem.id}>
                                <td>{queueItem.position}</td>
                                <td>{queueItem.customer.firstName}</td>
                                <td>Cher</td>
                                <td><img src={deleteImg} onClick={() => deleteFromQueue(queueItem.id)}></img></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}