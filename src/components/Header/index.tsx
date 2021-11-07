import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onHandleOpenNewQueueItemModal:  () => void;
}

export function Header({onHandleOpenNewQueueItemModal} : HeaderProps){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="QueueVet"/>
                <button type="button" onClick={onHandleOpenNewQueueItemModal}>
                    Adicionar na Fila
                </button>

            </Content>
        </Container>
    )
}