import { Container } from "./styles";
import {useQueue} from "../../hooks/useQueue";
import { useUsers } from "../../hooks/useUsers";

export function VeterinarySummary() {
    const { users } = useUsers()

    return (
        <Container>
            <div>
                <header>
                    <p>Total de Veterinários</p>
                </header>
                <strong>
                    {users.filter(user => user.category == 'VETERINARY').length}
                </strong>
            </div>
        </Container>
    )
}