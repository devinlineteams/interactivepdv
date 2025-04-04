import { ChangeEvent, Component, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from "axios";
import SerachComponent from '@/components/serchComponent';
import { http } from '@/dao/daohttp/axiosPost';
import GetAllProdutosDao from '@/dao/GetAllProdutosDao';
import { Carrinho } from '@/service';
import Produto from '@/model/Produto';
import ListPdvComponente from '../../components/ListPdvComponente';

import { covertDoubleEmReal } from '@/utils';
import { Link } from "react-router";

import './pdvcss.css'
import UserSystems from '@/service/UserSystem';
import Funcionario from '@/model/Funcionario';
import ModalSelectCompany from '@/modal/modal_select_company';
import { Producto } from '@/model/profileData';
import React from 'react';
import { UserSystemContext } from '@/context/userSistemContext';
import Caixa from '@/components/caixa/Caixa';
import { EstadoMenuAtendete, EstadoCaixaProvider } from '@/context/useContextMenuAtendente';
import Registrecategory from '@/components/cad-categoria/registreCategory';
import CadastrarClienteConsultor from '@/components/cad-cliente/cadCliente';
import ConsultarVendasConsultor from '@/components/consulta-venda-atendente/consultarVendasConultor';
import ConsultorProductoVendedor from '@/components/consultar-produto-atendente/consultarProductoConsultor';



function  Pdv2() {

   let carrinho = new Carrinho();
   //const {idEmployee} = useContext(UserSystemContext);
   //const {idCompany} = useContext(UserSystemContext);
   const userSystemContext = useContext(UserSystemContext);
   const estadoMenuAtendente = useContext(EstadoMenuAtendete);
   let listProducto:Producto[]=[];
   
   const  inputs = [
        {type:'input', placeholder:'search'},
    ]

   // const [searchValue, setSearchValue] = useState('');
    
    const [displayProduto, setDisplayProduto] = useState('');
    const [desableButtons, setDesableButton] = useState(true);
    const [resetDisplayProdut, setResetDisplayProdut] = useState(false);
    const [totalItens, setTotalItens] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);
    const [cart, setCart] = useState<Producto[] | undefined>([]);
    const [company, setCompany] = useState('');
    const [nameUserSystem, setNameUserSystem] = useState('');



       const handleChangeSearch = async (e)=>{
            const {value} = e.target;
            getAllProductosDaoLocal()
            for(let i=0; i<listProducto.length;i++){
                if(listProducto[i].codBarra ===value){
                        let quantInput = (document.getElementById('quantInput') as HTMLAreaElement).value;
                    if(!quantInput) quantInput =1
                         const prod:Producto ={
                            batch : listProducto[i].batch,
                            codBarra : listProducto[i].codBarra,
                            dateRegistre : listProducto[i].dateRegistre,
                            idProducto : listProducto[i].idProducto,
                            idSupplier : listProducto[i].idSupplier,
                            index : listProducto[i].index,
                            line : listProducto[i].line,
                            mark : listProducto[i].mark,
                            nameProduto : listProducto[i].nameProduto,
                            notafiscal : listProducto[i].notafiscal,
                            pricePurchase : listProducto[i].pricePurchase,
                            priceSales : listProducto[i].priceSales,
                            quant :  Number(quantInput),
                            quantidadeEstoque : listProducto[i].quantidadeEstoque,
                            validity : listProducto[i].validity,
                            vTotal : ( Number (quantInput) * Number(listProducto[i].priceSales)),
                            discount:0,
                            funcaoDeleteItem : listProducto[i].funcaoDeleteItem
                    };
                    plusValorTotal(Number(prod.vTotal))
                    quantidadeDeItems(Number(prod.quant))
                    addProductoCarrinho(prod)
                    clienElementoInputSearch();
                }else{
                    console.log("entrou no else");
                }
            }

        }
    
       const plusValorTotal = (v:number)=>{
            let vTo = Number(valorTotal + v);
            setValorTotal(vTo)
        }
       const quantidadeDeItems =(itens:number)=>{
            totalItens
            let total = totalItens+ itens;
            setTotalItens(total)
        }
       const clienElementoInputSearch =()=>{
            getCart();
            console.log("entrou no metodo clean")
            setTimeout( ()=>{
                const serach = (document.getElementById('search') as HTMLInputElement).value ="";
            },1500)
        }
        const getCart= async ()=>{
            const newCart = carrinho.getCartForLi();
            setCart(newCart);
        }
       const addProductoCarrinho = (producto:Producto)=>{
            carrinho.addProductToTheCart(producto)
        }
       const handleBlue = ()=>{
        setDesableButton(false)
        }
       const handleclick =(e: React.FormEvent)=>{
            e.preventDefault();
            getAllProductosDaoServidor();
        }
       const deleteItem = (index:number)=>{
            carrinho.deleteProduct(index);
            vTotalWithDiscount();
        }
       const descontoItem = (index:number, desconto:string)=>{
            carrinho.setDescontoItemCart(index, Number(desconto));
            vTotalWithDiscount();
        }
       const vTotalWithDiscount=()=>{
             setValorTotal(carrinho.getTotalValue())
        }

       const getAllProductosDaoLocal = ()=>{
          listProducto =  GetAllProdutosDao.prototype.getAllProdutos();

        }
      const getAllProductosDaoServidor=()=>{
           GetAllProdutosDao.prototype.getAllProductoServdor(userSystemContext.idEmployee);
            getAllProductosDaoLocal();
        }

       const getUserSystem =()=>{
            let token:string = String(Cookies.get('Authorization'));
           let user = UserSystems.prototype.getUserSystem(token);
            user.then((response)=>{
                setNameUserSystem(`${response['userName']} ${response['userSobreName']}`)
            })
           
        }
        const getCaixaComponent = async ()=>{
            await estadoMenuAtendente.setEstado(true);
        }
        const getComponentRegCategory = async() =>{
           await estadoMenuAtendente.setEstadoRegistre(true);
        }

        const getComponentCadClienteConultor = () =>{
            estadoMenuAtendente.setEstadoCadCliente(true);
        }
        const getComponentConsultarVendas = () =>{
            estadoMenuAtendente.setEstadoVendas(true);
        }
        const getComponentConProdConsultor = ()=>{
            estadoMenuAtendente.setEstadoConPorducto(true)
        }
        useEffect(()=>{
            getUserSystem();
            getAllProductosDaoServidor();
        },[])

        return(

     
            <div id='pdv' className='divPdv'>
                        <ModalSelectCompany />
                        <Registrecategory />
                        <CadastrarClienteConsultor />
                        <ConsultarVendasConsultor />
                        <ConsultorProductoVendedor />
                            <Caixa />

                 <div className='divLeft'>
     
                 </div>
                 <div className='divRight'>
     
                     <div className='divSupInf'>
                         <div className='divSup'>
                                    <div id="dvCompany">
                                        <h1>{userSystemContext.nameCompnay}</h1>
                                    </div>
                             <div id="searchdiv">
                                    <input id="quantInput" placeholder='1' />
                                    <input
                                        id='search'
                                        onChange={handleChangeSearch}
                                    />
                                    <button id="btnSearch"
                                        onClick={ handleclick}
                                    >Atualizar Produtos</button>

                                  </div>
                             <div id="nameLogin"> <h1>Logado com: {userSystemContext.nameUserSystem}</h1></div>
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
                                                            <label id="plus-item">Desconto</label>
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
                                                discount={0}
                                                funcaoDeleteItem={deleteItem}
                                                functionDesconto={descontoItem}
                                                 />
                                            ))
                                         }
                                     </ol>
                                   
                                 </div>
                                 <div className='divSaleTot'>
                                    <div id="tot">
                                         <h1>Total:</h1> <h1 id="vTotal">{covertDoubleEmReal(valorTotal)}</h1>
                                    </div>
                                    <div id="methodPayment">
                                         <div id="payment">
                                            <h1>Forma de Pagamento:</h1>
                                            <select>
                                                <option value="Dinheiro">Dinheiro</option>
                                                <option value="Cartao">Cartão</option>
                                                <option value="Debito">Debito</option>
                                                <option value="Pix">Pix</option>
                                                <option value="Credito">Credito</option>
                                                <option value="cartao Parcelado">Parcelado</option>
                                            </select>
                                         </div>
                                         <div id="finish">
                                            <button>Finalizar</button>
                                         </div>
                                    </div>
                                 </div>
                             </div>
                             <div className='divMenuAtendente'>
                                        <Link to="/cadastrarproduto"><button className='funAtendente' >Cadastrar Produto</button> </Link> 
                                            <button className='funAtendente' onClick={getComponentRegCategory} >Cadastrar Categoria</button>
                                            <button className='funAtendente' onClick={getComponentCadClienteConultor}>Cadastrar Cliente</button>
                                            <button className='funAtendente' onClick={getComponentConProdConsultor}>Consultar Produto</button>
                                            <button className='funAtendente' onClick={getComponentConsultarVendas}>Vendas</button>
                                            <button className='funAtendente' onClick={getCaixaComponent}>Caixa</button>
                             </div>
                         </div>
     
                     </div>
     
                 </div>
            </div>
         )

}

export default Pdv2;