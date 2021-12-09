import { Container } from "./styles";
import {useQueue} from "../../hooks/useQueue";
import { useUsers } from "../../hooks/useUsers";

export function SummaryEmployee() {
    const { users } = useUsers()

    return (
        <Container>
            <div>
                <header>
                    <p>Total de Funcionários</p>
                </header>
                <strong>
                    {users.filter(user => user.category == 'EMPLOYEE').length}
                </strong>
            </div>
        </Container>
    )
}