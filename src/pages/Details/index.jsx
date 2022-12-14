import { Container, Links } from "./styles"

import { Header } from "../../components/Header"
import {Section} from "../../components/Section"
import { Button } from "../../components/Button"


export function Details() {
    
  return (
    <Container>
      <Header/>
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#" target="_blank" > https://www.rocketseat.com.br/</a>
          </li>
          <li>
            <a href="#" target="_blank" > https://www.rocketseat.com.br/</a>
          </li>
        </Links>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}
