import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { useQueue } from '../../hooks/useQueue';

import closeImg from '../../assets/close.svg'

Modal.setAppElement('#root')

interface NewQueueItemModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewQueueItemModal({isOpen, onRequestClose} : NewQueueItemModalProps) {
    const { addToQueue } = useQueue();

    const [customerId, setCustomerId] = useState(0);

    async function handleCreateNewQueueItem(event: FormEvent) {
        event.preventDefault();

        await addToQueue(customerId)

        setCustomerId(0);

        onRequestClose();
    }

    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fecha"/>
            </button>

            <Container onSubmit={handleCreateNewQueueItem}>
                <h2>Adicionar na Fila</h2>

                <input 
                    placeholder="Customer ID"
                    value={customerId}
                    onChange={event => setCustomerId(Number(event.target.value))}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}