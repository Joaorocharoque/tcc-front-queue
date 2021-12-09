import { Container } from "./styles";
import {useQueue} from "../../hooks/useQueue";
import { useUsers } from "../../hooks/useUsers";

export function SummaryCustomer() {
    const { users } = useUsers()

    return (
        <Container>
            <div>
                <header>
                    <p>Total de Clientes</p>
                </header>
                <strong>
                    {users.filter(user => user.category == 'CUSTOMER').length}
                </strong>
            </div>
        </Container>
    )
}