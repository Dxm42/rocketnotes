import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout} from "./styles";

export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/dxm42.png" alt="Fotod o usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Lucas Santos</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}