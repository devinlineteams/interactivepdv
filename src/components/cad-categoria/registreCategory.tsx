
import { useContext, useEffect, useState } from "react";
import './registreCategory.css'
import { EstadoMenuAtendete } from "@/context/useContextMenuAtendente";

function Registrecategory(){

    const estadoMenuAtendente = useContext(EstadoMenuAtendete);

    const handeClickEstadoRegistre =()=>{

        estadoMenuAtendente.setEstadoRegistre(!estadoMenuAtendente.estadoRegistre);
    }
    useEffect(()=>{
      },[estadoMenuAtendente.estadoRegistre])

    return(
        <>
        <div className={estadoMenuAtendente.estadoRegistre ? 'registreCategory-false':'registreCategory-true'}>
            <div id="dvMenuValtar">
                    <button id="btnVoltar" onClick={handeClickEstadoRegistre}>
                    
                    </button>
            </div>
            <div id="contexRegistre">
                <div className="blocCategory">
                    <div className="title" >
                        <h2>Categoria</h2> 
                    </div>
                    <div className="sub-title">
                        <h3>Lista de Categoria:</h3>
                    </div>
                    <div className="listaCategory">
                        <ol className="liol" >
                            <li> makup</li>
                        </ol>
                    </div>
                    <div className="inputCadCategoria">
                        <input placeholder="Categoria" />
                        <button className="btnCategory" > Cadastrar</button>
                    </div>
                </div>
                <div className="subCategory">
                        <div className="title" >
                            <h2>Sub Categoria</h2> 
                        </div>
                        <div className="listaCategory">
                            <select>
                                    <option>Selecione  uma categoria para vincular a subcategoia</option>
                            </select>
                            <div className="sub-title" >
                                <h3>Lista de Sub-Categoria:</h3>
                            </div >
                                <ol className="liol">
                                <li> facial</li>
                            </ol>
                        </div>
                        <div>
                            <div className="inputCadCategoria" >
                                <input placeholder=" Sub-Categoria" />
                                <button className="btnCategory" > Cadastrar</button>
                            </div>
                                    
                       </div >
                            
                </div>
            </div>
        </div>
        
        </>
    )

}
export default Registrecategory;