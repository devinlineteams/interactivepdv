import { useEffect } from 'react';
import Cookies from 'js-cookie';
 import './pdvcss.css'
import { userSearchProductosales } from '@/hooks';

function Pdv(){

    const inputs = {type:'search', placeholder:'Codigo Barra'}


    const { handleChangeSearch} = userSearchProductosales(inputs);

    useEffect(()=>{
      let Authorization =  Cookies.get('Authorization');
      console.log(`a autenticação é:  ${Authorization}`);
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
                             <input id="seach"
                                type ={inputs.type}
                                 placeholder={inputs.placeholder}
                                 onChange={(e:ChangeEvent<HTMLInputElement>) =>  handleChangeSearch((e.target as HTMLInputElement).value)}
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