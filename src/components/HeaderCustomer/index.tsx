import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderCustomerProps{
    onHandleOpenNewCustomerItemModal:  () => void;
}

export function Header({onHandleOpenNewCustomerItemModal} : HeaderCustomerProps){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="QueueVet"/>
                <button type="button" onClick={onHandleOpenNewCustomerItemModal}>
                    Adicionar Novo Cliente
                </button>

            </Content>
        </Container>
    )
}