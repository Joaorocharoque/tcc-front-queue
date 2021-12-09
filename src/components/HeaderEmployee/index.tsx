import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderEmployeeProps{
    onHandleOpenNewEmployeeItemModal:  () => void;
}

export function HeaderEmployee({onHandleOpenNewEmployeeItemModal} : HeaderEmployeeProps){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="QueueVet"/>
                <button type="button" onClick={onHandleOpenNewEmployeeItemModal}>
                    Adicionar Novo
                </button>

            </Content>
        </Container>
    )
}