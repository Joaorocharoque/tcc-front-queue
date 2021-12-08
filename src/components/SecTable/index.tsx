import { Container } from "./styles";
import {useUsers} from "../../hooks/useUsers";

export function SecTable() {
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}