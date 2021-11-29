import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onHandleOpenNewQueueItemModal:  () => void;
    showAddToQueueButton: boolean
}

export function Header({onHandleOpenNewQueueItemModal, showAddToQueueButton} : HeaderProps){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="QueueVet"/>
                {showAddToQueueButton ? (
                    <button type="button" onClick={onHandleOpenNewQueueItemModal}>
                        Adicionar na Fila
                    </button>
                ) : null}
            </Content>
        </Container>
    )
}