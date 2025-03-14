import { ChangeEvent, Component, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
 import './pdvcss.css'
 import axios from "axios";
import SerachComponent from '@/components/serchComponent';
import { http } from '@/dao/daohttp/axiosPost';
import GetAllProdutosDao from '@/dao/GetAllProdutosDao';
import { Carrinho } from '@/service';
import Produto from '@/model/Produto';
import ListPdvComponente from '../../components/ListPdvComponente';

import { Producto } from '@/model/Producto';
import { covertDoubleEmReal } from '@/utils';

export class Pdv extends Component{
     inputs = [
        {type:'input', placeholder:'search'},
    ]

        state ={
                searchValue:'',
                displayProduto:'',
                desableButton:true,
                resetDisplayProdut:false,
                totalItem:0,
                valorTotal:0,
                cart:[] 
            }

        cart = new Carrinho();

        static listPorducto:Producto[]=[];

        handleChangeSearch = async (e)=>{
            const {value} = e.target;

            for(let i=0; i<Pdv.listPorducto.length;i++){
                if(Pdv.listPorducto[i].codBarra ===value){
                    let quantInput = (document.getElementById('quantInput') as HTMLAreaElement).value;
                    
                    if(!quantInput) quantInput =1

                    const prod:Producto ={
                        batch : Pdv.listPorducto[i].batch,
                        codBarra : Pdv.listPorducto[i].codBarra,
                        dateRegistre : Pdv.listPorducto[i].dateRegistre,
                        idProducto : Pdv.listPorducto[i].idProducto,
                        idSupplier : Pdv.listPorducto[i].idSupplier,
                        index : Pdv.listPorducto[i].index,
                        line : Pdv.listPorducto[i].line,
                        mark : Pdv.listPorducto[i].mark,
                        nameProduto : Pdv.listPorducto[i].nameProduto,
                        notafiscal : Pdv.listPorducto[i].notafiscal,
                        pricePurchase : Pdv.listPorducto[i].pricePurchase,
                        priceSales : Pdv.listPorducto[i].priceSales,
                        quant :  Number(quantInput),
                        quantidadeEstoque : Pdv.listPorducto[i].quantidadeEstoque,
                        validity : Pdv.listPorducto[i].validity,
                        vTotal : ( Number (quantInput) * Number(Pdv.listPorducto[i].priceSales)),
                        funcaoDeleteItem : Pdv.listPorducto[i].funcaoDeleteItem
                    };
                    this.plusValorTotal(Number(prod.vTotal))
                    this.quantidadeDeItems(Number(prod.quant))
                    this.addProductoCarrinho(prod)
                    this.clienElementoInputSearch();
               
                    console.log(Pdv.listPorducto[i])

                }else{
                    console.log("entrou no else");
                }
            }

        }
        plusValorTotal(v:number){

            let {valorTotal} = this.state

            let vTo = valorTotal + v;

            this.setState({valorTotal:vTo})

        }
        quantidadeDeItems(itens:number){
            let {totalItem} = this.state
            let totItens = totalItem + itens;

            this.setState({totalItem:totItens})
            this.setState({totalItem:totItens})
        }

        clienElementoInputSearch(){
            this.getCart();
            setTimeout( ()=>{
                const serach = (document.getElementById('search') as HTMLInputElement).value ="";
            },1500)
        }
        async getCart(){
            const newCart = this.cart.getCartForLi();
            await  this.setState({cart:newCart})
            console.log("Início get cart carrinho");
             const {cart} = this.state;
          /*  console.log(cart)*/

        }
        addProductoCarrinho(producto:Producto){
            this.cart.addProductToTheCart(producto)
        }

        handleBlue = ()=>{
          this.setState({desableButton:false})
            console.log("entrou no desfocu do input search")
        }

        handleclick =(e: React.FormEvent)=>{
            e.preventDefault();
            this.getAllProductosDaoServidor();
            console.log("entrou no onclick")
        }
        deleteItem = (index:number)=>{
            this.cart.deleteProduct(index);
            this.getCart();
        }

        getAllProductosDaoLocal = ()=>{
            Pdv.listPorducto =  GetAllProdutosDao.prototype.getAllProdutos();

        }
        getAllProductosDaoServidor(){
            const token:string = String(Cookies.get('Authorization'));
            GetAllProdutosDao.prototype.getAllProductoServdor(token);
            this.getAllProductosDaoLocal();

        }

        componentDidMount() {
            this.getAllProductosDaoLocal();
            console.log(" entrou no didMount")
        }

        componentDidUpdate() {
            console.log(" entrou no didiUpdate")
        }
    


    render(){

        const {cart, desableButton, valorTotal, totalItem} = this.state;

        return(
            <div id='pdv' className='divPdv'>
                 <div className='divLeft'>
     
                 </div>
                 <div className='divRight'>
     
                     <div className='divSupInf'>
                         <div className='divSup'>
                             <div id="nameEmpresa"><h1>AEJBIJU</h1></div>
                             <div id="searchdiv">
                                    <input id="quantInput" placeholder='1' />
                                    <input
                                        id='search'
                                        onChange={this.handleChangeSearch}
                                    />
                                    <button id="btnSearch"
                                        onClick={ this.handleclick}
                                    >Atualizar Produtos</button>

                                  </div>
                             <div id="nameLogin"> <h1>Jair do Nascimento</h1></div>
                         </div>
                         <div className='divInf'>
                             <div className='divInfLisOfSales'>
                                 <div className='divListSales'>
                                          <div id="md-dv-li">
                                                <ul id="md-ul-li">
                                                      <li id="md-li">
                                                            <label>Ordem</label>
                                                            <label>Descrição</label>
                                                            <label> quant</label>
                                                            <label>V. Unitário</label>
                                                            <label>V. Total</label>
                                                            <label id="delete" className="btn-delete-li mg-btn-li"></label>
                                                            <label id="plus-item"></label>
                                                      </li>
                                                </ul>
                                          </div>
     
                                     <ol>
                                         {
                                            cart.map((item, index)=>(
                                                <ListPdvComponente
                                                index={index} 
                                                batch={item.batch}
                                                codBarra={item.codBarra} 
                                                dateRegistre={item.dateRegistre} 
                                                idProducto={item.idProducto} 
                                                idSupplier={0} 
                                                line={''} 
                                                mark={''} 
                                                quant={item.quant}
                                                nameProduto={item.nameProduto} 
                                                notafiscal={''} 
                                                pricePurchase={item.pricePurchase} 
                                                priceSales={item.priceSales} 
                                                validity={''} 
                                                vTotal = {item.vTotal}
                                                funcaoDeleteItem={this.deleteItem} />
                                            ))
                                         }
                                     </ol>
                                   
                                 </div>
                                 <div className='divsaleTot'>
                                    
                                    <div id="desItemTot">
                                        <div id="qidqiv">
                                            <h3 id="qid">Quantidade:</h3>
                                            <h3 id="qiv">{totalItem}</h3>
                                        </div>
                                        <div id="of">
                                            <input id="desconto" placeholder='desconto' />
                                        </div>
                                       
                                       
                                    </div>
                                    <div id="vTotal">
                                        <h2 id="infTotal">Valor Total:</h2>
                                         <h1 id="vTot">{covertDoubleEmReal(valorTotal)}</h1>
                                    </div>
                                        
                                 </div>
                             </div>
                             <div className='divInfSales'>
                                         
     
                             </div>
                         </div>
     
                     </div>
     
                 </div>
            </div>
         )
    }
    
   
}

export default Pdv;