import Cabecalho from "./Components/Cabecalho"
import Conteudo from "./Components/Conteudo"
import Rodape from "./Components/Rodape"
import logoReact from ".\assets\react.svg"

export default function App(){
  return(
<>
<Cabecalho/>


<Conteudo novoProps={novoConteudo} uriLogoReact={logoReact} altLogoReact={altLogo}/>

<Rodape/>


</>
  )
}