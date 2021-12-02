import { Container } from "./styles";
import { useCustomer } from "../../hooks/useCustomer";

export function CustomerTable() {
    const { customer } = useCustomer()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>CPF</th>
                        <th>Pet</th>
                        <th>Raça</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        customer.map(customerItem => (
                            <tr key={customerItem.id}>
                                <td>{customerItem.firstName}</td>
                                <td>{customerItem.lastName}</td>
                                <td>{customerItem.email}</td>
                                <td>{customerItem.password}</td>
                                <td>{customerItem.cpf}</td>
                                <td>{customerItem.pets[0].name}</td>
                                <td>{customerItem.pets[0].breed}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}