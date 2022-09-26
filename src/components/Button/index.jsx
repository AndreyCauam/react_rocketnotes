import { Container } from "./styles";

export function Button({title, loading = false, ...rest}){ //assim está sendo desestruturado do que seria Button(props)
  
  return (
  <Container 
    type="button"
    disabled={loading}
    {...rest}
  >
    {loading ? "Carregando..." : title}
  </Container> 
  )
}