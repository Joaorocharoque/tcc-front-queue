import { Container } from "./styles";
import {useUsers} from "../../hooks/useUsers";
import deleteImg from '../../assets/delete.png'


export function TableEmployee() {
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
                        users.filter(user => user.category == 'EMPLOYEE')
                            .map(user => (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.cpf}</td>
                                <td><img src={deleteImg}></img></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}