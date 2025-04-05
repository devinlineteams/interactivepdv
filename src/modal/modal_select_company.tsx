//import CompanyService from '@/service/Company';
import './modal_select_company.css'
import UserSystems from '@/service/UserSystem';
import { useContext, useEffect, useState } from 'react';
import {CompanyModel} from '@/model/Company';
import CompanyService from '@/service/CompanyService';
import { UserSystemContext } from '@/context/userSistemContext';
import GetAllProdutosDao from '@/dao/GetAllProdutosDao';

function ModalSelectCompany(){

    const userSystemComtext = useContext(UserSystemContext);
     
    const[lista, setLista] = useState<CompanyModel[]>()
    const [selectCompnay, setSelectCompany] = useState(true)

    const getCompany =async ()=>{
        let company = new CompanyService();
            let com =  company.getAllCompany(userSystemComtext.idEmployee); 
            await com.then((response)=>{
                 setLista(response);
            
            })   
      }
    const toCheck= ()=>{
        if(userSystemComtext.idCompany>0){
            setSelectCompany(false);
        }
    }

    const handleClickSelectCompany = (e)=>{
        let company = (document.getElementById('slectCompany') as HTMLAreaElement).value;
    
            lista?.map(async (item, index)=>{
                if(item.companyName===company){
                  await  GetAllProdutosDao.prototype.getAllProductoServdor(item['idCompany']);
                  userSystemComtext.setIdCompany(Number(item['idCompany']));
                  userSystemComtext.setNameCompany(item['companyName'])
                  setSelectCompany(false);
                }else{
                    console.log("não encontrado")
                }
                
            })

    }

    const  handleClickSearchCompany = () =>{
        getCompany();
    }

    useEffect(()=>{
         getCompany();
         toCheck();
      },[])

    return(
        <>
        <div id={selectCompnay ? "blacktemplateTrue" : "blacktemplatefalse" }>
            <div id='divSelect'>
                    <select id="slectCompany">
                        <option>Selecione uma empresa</option>
                        {lista?.map((company, index)=>(
                            <option key={index} >{company.companyName}</option>
                        ))}
                    </select>
                    <div id="btnSearchEmpresa">
                        <button className='btnCompany' onClick={handleClickSelectCompany} >Selecionar</button>
                        <button className='btnCompany' onClick={handleClickSearchCompany} >Buscar Compania</button>
                    </div>
                    

            </div>
        
        </div>
        </>
    )
}

export default ModalSelectCompany;