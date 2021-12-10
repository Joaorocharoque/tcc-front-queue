import { Container } from "./styles";
import {useUsers} from "../../hooks/useUsers";
import deleteImg from '../../assets/delete.png'

export function TableCustomer() {
    const { users, deleteFromUser } = useUsers()

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
                        users.filter(user => user.category == 'CUSTOMER')
                            .map(user => (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.cpf}</td>
                                <td><img src={deleteImg} onClick={() => deleteFromUser(user.id)}></img></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}