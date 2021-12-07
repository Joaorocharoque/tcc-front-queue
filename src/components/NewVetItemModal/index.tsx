import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';

import closeImg from '../../assets/close.svg'
import {useUsers} from "../../hooks/useUsers";

Modal.setAppElement('#root')

interface NewVetItemModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewVetItemModal({isOpen, onRequestClose} : NewVetItemModalProps) {
    const { addToUser } = useUsers();

    const [vet, setVet] = useState('');
    const [crmv, setCrmv] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleCreateNewVetItem(event: FormEvent) {
        event.preventDefault();

        // await createVet({
        //     vet,
        //     crmv,
        //     email,
        //     password,
        // })

        setVet('');
        setCrmv(0);
        setEmail('');
        setPassword('')

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

            <Container onSubmit={handleCreateNewVetItem}>
                <h2>Adicionar na Fila</h2>

                <input 
                    placeholder="Veterinário"
                    value={vet}
                    onChange={event => setVet(event.target.value)}
                />

                <input type="number"
                    placeholder="CRMV"
                    value={crmv}
                    onChange={event => setCrmv(Number(event.target.value))}
                />

                <input 
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                     <input 
                    placeholder="Senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}