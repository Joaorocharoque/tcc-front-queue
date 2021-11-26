import { Container } from "./styles";
import {useVet} from "../../hooks/useVet";

export function VetTable() {
    const { vet } = useVet()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Veterinário</th>
                        <th>CRMV</th>
                        <th>Email</th>
                        <th>Senha</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        vet.map(vetItem => (
                            <tr key={vetItem.id}>
                                <td>{vetItem.vet}</td>
                                <td>{vetItem.crmv}</td>
                                <td>{vetItem.email}</td>
                                <td>{vetItem.password}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}