import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { useQueue } from '../../hooks/useQueue';

import closeImg from '../../assets/close.svg'
import addImg from '../../assets/add.png'

Modal.setAppElement('#root')

interface NewQueueItemModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewQueueItemModal({isOpen, onRequestClose} : NewQueueItemModalProps) {
    const { addToQueue, findCustomerByCpf, customerPets, clearCustomerPets } = useQueue();

    const [cpf, setCpf] = useState('');

    async function handleFindPets(event: FormEvent) {
        event.preventDefault();
        findCustomerByCpf(cpf)
    }

    async function handleCreateNewQueueItem(event: FormEvent) {
        event.preventDefault();

        await addToQueue(cpf)

        setCpf('');
        clearCustomerPets()
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

            <Container onSubmit={handleFindPets}>
                <h2>Adicionar na Fila</h2>

                <input 
                    placeholder="CPF"
                    value={cpf}
                    onChange={event => setCpf(event.target.value)}
                />
                <table>
                    <tbody>
                        {customerPets.map(pet => (
                            <tr key={pet.id}>
                                <td><img src={addImg} onClick={handleCreateNewQueueItem}/></td>
                                <td>{pet.name}</td>
                                <td>{pet.breed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button type="submit">
                    Buscar
                </button>
            </Container>
        </Modal>
    )
}