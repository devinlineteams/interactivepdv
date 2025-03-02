import { ChangeEvent, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
 import './pdvcss.css'
 import axios from "axios";
import SerachComponent from '@/components/serchComponent';
import { http } from '@/dao/daohttp/axiosPost';


function Pdv(){
    const inputs = [
        {type:'input', placeholder:'search'},
    ]

    const [search, setSearch] = useState(false)

    const handleChangeSearch = async (index:number,value:string)=>{
        console.log(` o value é ${value}`)

    }
    const handleclick =(e: React.FormEvent)=>{
        e.preventDefault();

        const axiosConfig = {headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization", 
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        "Content-Type": "application/json;charset=UTF-8",
        "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0MDc4NjQ3MSwiZXhwIjoxNzQwNzg2NzcxfQ.vIyG4zYm8kAoF5MSHydSiu6aFCHE5EV5sn_gNnBknkI"
        }}

        console.log("entrou no click")
       /* getAllProducto("/getAllproducto")*/
       http.post("/getAllproducto",{"":""}, axiosConfig).then((response)=>{ response.data})


    }

    useEffect(()=>{

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