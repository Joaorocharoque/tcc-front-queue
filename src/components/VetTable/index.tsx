import { Container } from "./styles";
import {useUsers} from "../../hooks/useUsers";

export function VetTable() {
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
                        users.filter(user => user.category == 'VETERINARY')
                            .map(vetItem => (
                            <tr key={vetItem.id}>
                                <td>{vetItem.firstName}</td>
                                <td>{vetItem.lastName}</td>
                                <td>{vetItem.email}</td>
                                <td>{vetItem.cpf}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}