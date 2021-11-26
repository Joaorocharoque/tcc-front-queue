import { Container } from "./styles";
import { useTableSec } from "../../hooks/useTableSec";

export function SecTable() {
    const { sec } = useTableSec()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Secretária</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Senha</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        sec.map(secItem => (
                            <tr key={secItem.id}>
                                <td>{secItem.sec}</td>
                                <td>{secItem.cpf}</td>
                                <td>{secItem.email}</td>
                                <td>{secItem.password}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}