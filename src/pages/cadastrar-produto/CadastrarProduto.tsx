import { Component } from "react";
import './cad-produto.css'
import { Link } from "react-router-dom";

export class CadastrarProduto extends Component{



    render(){

        return(
            <>
                <div id="bl-cad_prod">
                    <div id="divh1">
                    <h1>Cadastro de produto</h1>
                    </div>
                    <div id="inputs">
                        <div id="search" >
                            <input type="text"  className="d-prod-input" placeholder=" Search"></input>
                            <button>Buscar</button>
                        </div>
                        <div className="d-prod-1">
                            <input type="text" name="name"  className="d-prod-input" placeholder="name"></input>
                            <input  type="text" name="codBarra" className="d-prod-input input-two" placeholder="Codigo de barra"></input>
                        </div>
                        <div className="d-prod-1">
                            <input type="text" name="pricePurchase"  className="d-prod-input" placeholder="Valor de Compra"></input>
                            <input  type="text" name="priceSales" className="d-prod-input input-two" placeholder="Valor de venda"></input>
                        </div>
                        <div className="d-prod-1">
                            <input type="text" name="validity"  className="d-prod-input" placeholder="Validade"></input>
                            <input  type="text" name="mark" className="d-prod-input input-two" placeholder="Marca"></input>
                        </div>
                        <div className="d-prod-1">
                            <input type="text" name="batch"  className="d-prod-input" placeholder="Lote"></input>
                            <input  type="text" name="line" className="d-prod-input input-two" placeholder="Linha"></input>
                        </div>
                        <div className="d-prod-1">
                            <input type="date" name="dateRegistre"  className="d-prod-input" placeholder="Data Cadastro"></input>
                            <input  type="text" name="notafiscal" className="d-prod-input input-two" placeholder="Nota fiscal"></input>
                        </div>
                        <div className="d-prod-1">
                            <input type="date" name="validity"  className="d-prod-input" placeholder="Validade"></input>
                            <input  type="text" name="Quantidade" className="d-prod-input input-two" placeholder="Quantidade"></input>
                        </div>
                        <div className="d-prod-1">
                            <input type="text" name="desconto"  className="d-prod-input" placeholder="Desconto"></input>
                            <input  type="text" name="notafiscal" className="d-prod-input input-two" placeholder="Quantidade"></input>
                        </div>
                        <div className="d-prod-2">
                            <button className="btn-cad"> Cadastrar</button>
                            <button className="btn-cad" >Alterar</button>
                            <button className="btn-cad" >Deletar</button>
                          
                        </div>
                        <div id="d-prod-voltar">
                            <Link to="/pdv"><button id="voltar">Voltar</button></Link>
                        </div>
                        
                    </div>
                    
                </div>
            </>
        )
    }

}
export default CadastrarProduto;