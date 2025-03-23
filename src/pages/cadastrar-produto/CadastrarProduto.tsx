
import { Component } from "react";

import './cad-produto.css'
import { Link } from "react-router-dom";
import { CadProduto } from "@/model/Cad-Producto";
import CadProdutoservice from "@/service/CadProdutoService";

export class CadastrarProduto extends Component{


    buscarProduto = (e) =>{
        e.preventDefault();
        let search:string = (document.getElementById('search') as HTMLInputElement).value;
        console.log( ` entrou no search ${search}`)

    }

    cadastrarPorduto = (e)=>{
        e.preventDefault();
        let name:string = (document.getElementById('name') as HTMLInputElement).value;
        let codBarra:string = (document.getElementById('codBarra') as HTMLInputElement).value;
        let validity:string = (document.getElementById('validity') as HTMLInputElement).value;
        let precoVenda:string = (document.getElementById('priceSales') as HTMLInputElement).value;
        let priceCompra:string = (document.getElementById('pricePurchase') as HTMLInputElement).value;
        let marca:string = (document.getElementById("mark") as HTMLInputElement).value;
        let batch:string = (document.getElementById('batch') as HTMLInputElement).value;
        let line:string = (document.getElementById('line') as HTMLInputElement).value;
        let desconto:string = (document.getElementById('desconto') as HTMLInputElement).value;
        let notafiscal:string = (document.getElementById('notafiscal') as HTMLInputElement).value;
        let quantidade:string = (document.getElementById('quantidade') as HTMLInputElement).value;
        let dateRegistre:string = (document.getElementById('dateRegistre') as HTMLInputElement).value;
        let primarycategory:string = (document.getElementById("primarycategory")as HTMLSelectElement).value
        let secondycategory:string = (document.getElementById("secondycategory")as HTMLSelectElement).value

        let cadProduto:CadProduto = {
            nameProduto:String(name),
            codBarra:codBarra,
            dateValidade:validity,
            priceSales:Number(precoVenda),
            pricePurchase:Number(priceCompra),
            batch:batch,
            line:line,
            mark:marca,
            discount:Number(desconto),
            notafiscal:notafiscal,
            quant:Number(quantidade),
            dateRegistre:dateRegistre,
            primarycategory:primarycategory,
            secondycategory:secondycategory
        };

       let cadProdutoService = new CadProdutoservice();
       cadProdutoService.postarProdutoBd(cadProduto);
           
    }
    alterarCadastroProduto =(e)=>{
        e.preventDefault();
        console.log( ` entrou no altera cadastro`)
    }
    deletProduto = (e)=>{
        e.preventDefault();
        console.log( ` entrou no delete cadastro`)
    }

        mudarTipo=()=>{

        }


    render(){

        return(
            
                <div id="bl-cad_prod">
                    <div id="divh1">
                    <h1>Cadastro de produto</h1>
                    </div>
                    <div id="inputs">
                        <div id="search" >

                            <input type="text" id="search"  className="d-prod-input" placeholder=" Search"></input>
                            <button onClick={ this.buscarProduto}>Buscar</button>
                        </div>
                        <div className="d-prod-1">
                        
                            <select name="" id="primarycategory" className="select" >
                                <option>Selecione tem de vim do banco de dao</option>
                                <option> Maquiagem facial</option>
                                <option> Maquiagem Corporal</option>
                                <option>Bijuteria</option>
                                <option>Aço Inox</option>
                                <option>Acessorios de Cabelo</option>
                                <option>Infantil</option>
                            </select>
                            <select name="" id="secondycategory" className="select" >
                                <option>Selecione tem de vim do banco de dao</option>
                                <option> Maquiagem facial</option>
                                <option> Maquiagem Corporal</option>
                                <option>Brinco Biju</option>
                                <option>Brinco Aço Inox</option>
                                <option>Colar Aço Inox</option>
                                <option>Colar Biju</option>
                            </select>
                        </div>
                        <div className="d-prod-1">
                            <input type="text" name="name" id="name"  className="d-prod-input" placeholder="Name"></input>
                            <input  type="number" name="codBarra" id="codBarra" className="d-prod-input input-two" placeholder="Codigo de barra"></input>
                        </div>
                        <div className="d-prod-1">
                        <input  type="number" name="notafiscal" id="notafiscal" className="d-prod-input" placeholder="Nota fiscal"></input>
                            <input  type="number" name="priceSales" id="priceSales" className="d-prod-input input-two" placeholder="Valor de venda"></input>
                        </div>
                        <div className="d-prod-1">
                            <input type="number" name="pricePurchase" id="pricePurchase" className="d-prod-input" placeholder="Valor de Compra"></input>
                            <input  type="text" name="mark" id="mark" className="d-prod-input input-two" placeholder="Marca"></input>
                        </div>

                        <div className="d-prod-1">
                            <input type="text" name="batch" id="batch" className="d-prod-input" placeholder="Lote"></input>
                            <input  type="text" name="line" id="line" className="d-prod-input input-two" placeholder="Linha"></input>
                        </div>
                        <div className="d-prod-1">
                        <input type="number" name="desconto" id="desconto" className="d-prod-input" placeholder="Desconto"></input>
                        <input  type="number" name="quantidade" id="quantidade" className="d-prod-input input-two" placeholder="Quantidade"></input>
                        </div>
                        
                        <div id="divDate">
                            <div className="divsub">
                                <label className="lbDate">Data da validade</label>
                                <input type="date" id="validity"   name="validity"  className="input-dt" placeholder="Validade"></input>
                            </div> 
                            <div className="divsub divsub2" >
                                <label className="lbDate">Data de Cadastro</label>
                                <input type="date" name="dateRegistre" id="dateRegistre" className="input-dt-two input-dt"  placeholder="Data Cadastro"></input>
                            </div>
                            
                        </div>
                        <div className="d-prod-2">
                            <button className="btn-cad" onClick={this.cadastrarPorduto} > Cadastrar</button>
                            <button className="btn-cad" onClick={this.alterarCadastroProduto} >Alterar</button>
                            <button className="btn-cad" onClick={this.deletProduto} >Deletar</button>
                        </div>
                        <div id="d-prod-voltar">
                            <Link to="/pdv"><button id="voltar">Voltar</button></Link>
                        </div>
                        
                    </div>
                    
                </div>
        )
    }

}
export default CadastrarProduto;