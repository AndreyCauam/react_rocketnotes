import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";


export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/andreycauam.png" 
          alt="foto de Andrey" 
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Andrey Cauam</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}