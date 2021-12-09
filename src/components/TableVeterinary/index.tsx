import { Container } from "./styles";
import {useUsers} from "../../hooks/useUsers";
import deleteImg from '../../assets/delete.png'


export function TableVeterinary() {
    const { users } = useUsers()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.filter(user => user.category == 'VETERINARY')
                            .map(vetItem => (
                            <tr key={vetItem.id}>
                                <td>{vetItem.firstName}</td>
                                <td>{vetItem.lastName}</td>
                                <td>{vetItem.email}</td>
                                <td>{vetItem.cpf}</td>
                                <td><img src={deleteImg}></img></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}