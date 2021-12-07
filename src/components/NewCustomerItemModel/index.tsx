import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';

import closeImg from '../../assets/close.svg'
import {useUsers} from "../../hooks/useUsers";

Modal.setAppElement('#root')

interface NewCustomerItemModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewCustomerItemModal({isOpen, onRequestClose} : NewCustomerItemModalProps) {
    const { addToUser } = useUsers();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState(0);
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState(0);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState(0);
    const [description, setDescription] = useState('');
    const [pets, setPets] = useState('');
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');


    async function handleCreateNewCustomerItem(event: FormEvent) {
        event.preventDefault();

        // await addToUser({
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        //     cpf,
        //     address:{
        //     street,
        //     number,
        //     city,
        //     state,
        //     zipcode,
        //     description,
        //     },
        //
        //     pets:[
        //         {
        //         name,
        //         breed,
        //         }
        //     ],
        // })

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('')
        setCpf(0);
        setStreet('');
        setNumber(0);
        setCity('');
        setState('');
        setZipcode(0);
        setDescription('');
        setPets('');
        setName('');
        setBreed('');

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

            <Container onSubmit={handleCreateNewCustomerItem}>
                <div className="modal-body">
                <h2>Adicionar Cliente</h2>

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
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <input 
                    placeholder="Senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <input 
                    placeholder="CPF"
                    value={cpf}
                    onChange={event => setCpf(Number(event.target.value))}
                />
                 <input 
                    placeholder="Rua"
                    value={street}
                    onChange={event => setStreet(event.target.value)}
                />
                 <input 
                    placeholder="Numero"
                    value={number}
                    onChange={event => setNumber(Number(event.target.value))}
                />
                 <input 
                    placeholder="Cidade"
                    value={city}
                    onChange={event => setCity(event.target.value)}
                />
                 <input 
                    placeholder="Estado"
                    value={state}
                    onChange={event => setState(event.target.value)}
                />
                  <input 
                    placeholder="CEP"
                    value={zipcode}
                    onChange={event => setZipcode(Number(event.target.value))}
                />
                  <input 
                    placeholder="Descrição"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                  <input 
                    placeholder="Nome do Pet"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                  <input 
                    placeholder="Raça"
                    value={breed}
                    onChange={event => setBreed(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button> </div>
            </Container>
        </Modal>
       
    )
}