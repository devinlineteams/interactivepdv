import { ChangeEvent, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
 import './pdvcss.css'
 import axios from "axios";
import SerachComponent from '@/components/serchComponent';
import { http } from '@/dao/daohttp/axiosPost';
import GetAllProdutosDao from '@/dao/GetAllProdutosDao';


function Pdv(){
    const inputs = [
        {type:'input', placeholder:'search'},
    ]

    const [search, setSearch] = useState(false)

    const handleChangeSearch = async (index:number,value:string)=>{

       console.log(GetAllProdutosDao.prototype.getProducto(value));

    }
    const handleclick =(e: React.FormEvent)=>{
        e.preventDefault();
       

    }
    const getAllProducto = ()=>{
    let i = 0;
    console.log(` o valor de i é ( ${i} )`)
        if(i<1){
            console.log("entrou no if do i")
            GetAllProdutosDao.prototype.getAllProductoServdor();
            i = 1;
        }
      i =1;
    }

    useEffect(()=>{
        console.log("Entrou no useEffect");
        getAllProducto();
    }),[]

    
    return(
       <div id='pdv' className='divPdv'>
            <div className='divLeft'>

            </div>
            <div className='divRight'>

                <div className='divSupInf'>
                    <div className='divSup'>
                        <div id="nameEmpresa"><h1>AEJBIJU</h1></div>
                        <div id="seachdiv">
                            <SerachComponent
                                inputs={inputs.map((input, index)=>({
                                    id:'seach',
                                    type:input.type,
                                    placeholder:input.placeholder,
                                    onChange:(e:ChangeEvent<HTMLInputElement>)=> handleChangeSearch(index,(e.target as HTMLInputElement).value)
                                }))}
                            buttons={[
                                {
                                    id:'btnSearch',
                                    disabled: search,
                                    type:'submit',
                                    onClick:handleclick,
                                    children:'Atualizar Lista'
                                }
                            ]}
                            />
                             </div>
                        <div id="nameLogin"> <h1>Jair do Nascimento</h1></div>
                    </div>
                    <div className='divInf'>
                        <div className='divInfLisOfSales'>
                            <div className='divListSales'>

                            </div>
                            <div className='divsaleTot'>

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

export default Pdv;