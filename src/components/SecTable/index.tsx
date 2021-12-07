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
                        <th>CPF</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.filter(user => user.category == 'EMPLOYEE')
                            .map(secItem => (
                            <tr key={secItem.id}>
                                <td>{secItem.firstName}</td>
                                <td>{secItem.lastName}</td>
                                <td>{secItem.cpf}</td>
                                <td>{secItem.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}