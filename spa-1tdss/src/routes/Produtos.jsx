import { Link } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
import styles from "./Produtos.module.css";
import { AiFillEdit as Editar } from "react-icons/ai";
import { MdDeleteForever as Excluir } from "react-icons/md";
import { FaPlus as IconeAdicionar } from "react-icons/fa";

export default function Produtos() {
    document.title = "Lista de Produtos";

    return (
        <div>
            <h1>Produtos</h1>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableHeader}>ID</th>
                        <th className={styles.tableHeader}>NOME</th>
                        <th className={styles.tableHeader}>PREÇO</th>
                        <th className={styles.tableHeader}>
                            EDITAR / EXCLUIR / ADICIONAR
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ListaProdutos.map((produto, indice) => (
                        <tr className={styles.tableTr} key={indice}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>
                                <Link to={`/editar/produtos/${produto.id}`}>
                                    {" "}
                                    <Editar />{" "}
                                </Link>{" "}
                                |{" "}
                                <Link to={`/excluir/produtos/${produto.id}`}>
                                    {" "}
                                    <Excluir />{" "}
                                </Link>{" "}
                                |{" "}
                                <Link to={`/adicionar/produtos/${produto.id}`}>
                                    {" "}
                                    <IconeAdicionar />{" "}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3} style={{ textAlign: "center" }}>
                            PRODUTOS
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <Link to="/adicionar/produtos/novo">
                                <IconeAdicionar />
                            </Link>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
