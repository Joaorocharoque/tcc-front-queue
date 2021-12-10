import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';

import closeImg from '../../assets/close.svg'
import {useUsers} from "../../hooks/useUsers";

Modal.setAppElement('#root')

interface NewEmployeeItemModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewEmployeeItemModal({isOpen, onRequestClose} : NewEmployeeItemModalProps) {
    const { addToUser } = useUsers();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleCreateNewSecItem(event: FormEvent) {
        event.preventDefault();

        await addToUser({
            firstName,
            lastName,
            cpf,
            email,
            password,
            category: 'EMPLOYEE',
            profile: 'ADM',
            pets: []
        })

        setFirstName('');
        setLastName('');
        setCpf('');
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

            <Container onSubmit={handleCreateNewSecItem}>
                <h2>Adicionar Nova Secretaria</h2>

                <input 
                    placeholder="Nome"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                />
                <input
                    placeholder="Sobrenome"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                />
                <input 
                    placeholder="CPF"
                    value={cpf}
                    onChange={event => setCpf(event.target.value)}
                />
                <input 
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="password"
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