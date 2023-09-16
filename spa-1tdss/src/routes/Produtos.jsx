import { Link } from "react-router-dom";
//import { ListaProdutos } from "../Components/ListaProdutos";
import styles from "./Produtos.module.css";
import { AiFillEdit as Editar } from "react-icons/ai";
import { MdDeleteForever as Excluir } from "react-icons/md";
import { FaPlus as IconeAdicionar } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Produtos() {
    document.title = "Lista de Produtos";
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [produtos, setProdutos] = useState([{}])

    useEffect(()=>{
        console.log("useEffect será renderizado sempre que o componente ou qualquer objeto for atualizado");
    });

    useEffect(()=>{
        console.log("useEffect será renderizado apenas uma vez!")

        fetch("http://localhost:5000/produtos")
            .then((lista)=> lista.json())
            .then((listaProdutos)=>{
                setProdutos[listaProdutos];
            })

    },[]);

    useEffect(()=>{
        console.log("useEffect será renderizado apenas se um objeto/variavel/constant que estiver no array de dependencias sofrer uma atualizacao")
    },[counter2]);


    return (
        <div>
            <h1>Produtos</h1>
            <div>
                <button onClick={()=>{setCounter(counter + 1)}}>Counter - {counter}</button> 
            </div> 

            <div>
                <button onClick={()=>{setCounter2(counter2 + 1)}}>Counter - {counter2}</button> 
            </div> 
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableHeader}>{"   "}Id{"   "}</th>
                        <th className={styles.tableHeader}>{"   "}Nome{"   "}</th>
                        <th className={styles.tableHeader}>{"   "}Preço{"   "}</th>
                        <th className={styles.tableHeader}>{"   "}Editar{"   "}</th>
                        <th className={styles.tableHeader}>{"   "}Excluir{"   "}</th>
                        <th className={styles.tableHeader}>{"   "}Adicionar{"   "}</th>
  
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto, indice) => (
                        <tr className={styles.tableTr} key={indice}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td style={{ textAlign: "center" }}>
                                <Link to={`/editar/produtos/${produto.id}`}>
                                    {" "}
                                    <Editar />{" "}
                                </Link></td>
                                <td style={{ textAlign: "center" }}>
                                <Link to={`/excluir/produtos/${produto.id}`}>
                                    {" "}
                                    <Excluir />{" "}
                                </Link></td>
                                <td style={{ textAlign: "center" }}>
                                <Link to={`/adicionar/produtos/${produto.id}`}>
                                    {" "}
                                    <IconeAdicionar />{" "}
                                </Link></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3} style={{ textAlign: "center" }}>
                            PRODUTOS
                        </td>
                        <td colSpan={3} style={{ textAlign: "center" }} >
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
