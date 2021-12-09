import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderVetProps{
    onHandleOpenNewVetItemModal:  () => void;
}

export function HeaderVeterinary({onHandleOpenNewVetItemModal} : HeaderVetProps){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="QueueVet"/>
                <button type="button" onClick={onHandleOpenNewVetItemModal}>
                    Adicionar Novo
                </button>

            </Content>
        </Container>
    )
}