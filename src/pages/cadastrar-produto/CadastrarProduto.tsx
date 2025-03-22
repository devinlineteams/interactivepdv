<<<<<<< HEAD
import { Component } from "react";
=======
import { Component, HTMLAttributeAnchorTarget, HTMLAttributes } from "react";
>>>>>>> 301bbe00230d0db90331960c44025ffecb7130bc
import './cad-produto.css'
import { Link } from "react-router-dom";

export class CadastrarProduto extends Component{

<<<<<<< HEAD
    buscarProduto = (e) =>{
        e.preventDefault();
        let search:string = (document.getElementById('search') as HTMLInputElement).value;
        console.log( ` entrou no search ${search}`)

    }

    cadastrarPorduto = (e)=>{
        e.preventDefault();
        let name:string = (document.getElementById('name') as HTMLInputElement).value;
        console.log( ` entrou no cadastro ${name}`)
    }
    alterarCadastroProduto =(e)=>{
        e.preventDefault();
        console.log( ` entrou no altera cadastro`)
    }
    deletProduto = (e)=>{
        e.preventDefault();
        console.log( ` entrou no delete cadastro`)
    }
=======
        mudarTipo=()=>{
            let elemento = (document.getElementById("validity") as HTMLAttributest)
              
            console.log(` o atribuit é ${elemento}`)
        }
>>>>>>> 301bbe00230d0db90331960c44025ffecb7130bc

    render(){

        return(
            <>
                <div id="bl-cad_prod">
                    <div id="divh1">
                    <h1>Cadastro de produto</h1>
                    </div>
                    <div id="inputs">
                        <div id="search" >
<<<<<<< HEAD
                            <input type="text" id="search"  className="d-prod-input" placeholder=" Search"></input>
                            <button onClick={ this.buscarProduto}>Buscar</button>
                        </div>
                        <div className="d-prod-1">
                            <input type="text" name="name" id="name"  className="d-prod-input" placeholder="Name"></input>
                            <input  type="text" name="codBarra" className="d-prod-input input-two" placeholder="Codigo de barra"></input>
                        </div>
                        <div className="d-prod-1">
                            <input type="text" name="validity"  className="d-prod-input" placeholder="Validade"></input>
                            <input  type="text" name="priceSales" className="d-prod-input input-two" placeholder="Valor de venda"></input>
                        </div>
                        <div className="d-prod-1">
                            <input type="text" name="pricePurchase"  className="d-prod-input" placeholder="Valor de Compra"></input>
=======
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
>>>>>>> 301bbe00230d0db90331960c44025ffecb7130bc
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
<<<<<<< HEAD
                        <div className="d-prod-2">
                            <button className="btn-cad" onClick={this.cadastrarPorduto} > Cadastrar</button>
                            <button className="btn-cad" onClick={this.alterarCadastroProduto} >Alterar</button>
                            <button className="btn-cad" onClick={this.deletProduto} >Deletar</button>
=======
                        <div className="d-prod-1">
                            <input type="date" id="validity" onFocus={this.mudarTipo} name="validity"  className="d-prod-input" placeholder="Validade"></input>
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
>>>>>>> 301bbe00230d0db90331960c44025ffecb7130bc
                          
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