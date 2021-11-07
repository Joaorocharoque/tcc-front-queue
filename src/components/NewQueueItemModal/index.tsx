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
    const { createQueue } = useQueue();

    const [name, setName] = useState('');
    const [petName, setPetName] = useState('');
    const [position, setPosition] = useState(0);

    async function handleCreateNewQueueItem(event: FormEvent) {
        event.preventDefault();

        await createQueue({
            name,
            petName,
            position
        })

        setName('');
        setPosition(0);
        setPetName('');

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
                    placeholder="Nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <input type="number"
                    placeholder="Posição"
                    value={position}
                    onChange={event => setPosition(Number(event.target.value))}
                />

                <input 
                    placeholder="Nome Pet"
                    value={petName}
                    onChange={event => setPetName(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}