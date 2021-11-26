import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderSecProps{
    onHandleOpenNewSecItemModal:  () => void;
}

export function Header({onHandleOpenNewSecItemModal} : HeaderSecProps){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="QueueVet"/>
                <button type="button" onClick={onHandleOpenNewSecItemModal}>
                    Adicionar Nova Secretária
                </button>

            </Content>
        </Container>
    )
}