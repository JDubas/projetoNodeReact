import { Link } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";

export default function Produtos(){
    return(
        <div>
           <h1> Produtos</h1>
           <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preco</th>
            </tr>
            </thead>
            <tbody >
            {ListaProdutos.map((produto,indice)=>(
                <tr key={indice}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td><Link to={`/editar/produtos/${produto.id}`}>Editar</Link></td>

                </tr>
            ))}
            </tbody>

           </table>
        </div>
    )
}