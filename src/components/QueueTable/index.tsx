import { Container } from "./styles";
import { useQueue } from "../../hooks/useQueue";

import deleteImg from '../../assets/delete.png'
import qrCodeImg from '../../assets/qr-code.png'
import { useState } from "react";
import { QrcodeModal } from "../QrcodeModal";

export function QueueTable() {
    const { queue, deleteFromQueue } = useQueue()
    const [ isQrcodeModalOpen, setQrcodeModalOpen ] = useState(false);
    const [ queueItemId, setQueueItemId] = useState(0);

    function handleOpenQrcodeModal(queueId: number){
        setQrcodeModalOpen(true);
        setQueueItemId(queueId)
    }

    function handleCloseQrcodeModal(){
        setQrcodeModalOpen(false);
    }

    return (
        
        <Container>
            <QrcodeModal
                isOpen={isQrcodeModalOpen}
                onRequestClose={handleCloseQrcodeModal} 
                queueItemId={queueItemId}/>

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
                                <td>
                                    <img src={qrCodeImg} onClick={() => handleOpenQrcodeModal(queueItem.id)}></img>
                                    <img src={deleteImg} onClick={() => deleteFromQueue(queueItem.id)}></img>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}