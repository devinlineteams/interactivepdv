
import { useContext, useEffect, useState } from "react";
import './consultarProductoConultor.css'
import { EstadoMenuAtendete } from "@/context/useContextMenuAtendente";

function ConsultorProductoVendedor(){

    const estadoMenuAtendente = useContext(EstadoMenuAtendete);

    const handeClickEstadoRegistre =()=>{

        estadoMenuAtendente.setEstadoConPorducto(!estadoMenuAtendente.estadoConProducto);
    }
    useEffect(()=>{
      },[estadoMenuAtendente.estadoConProducto])

    return(
        <>
        <div className={estadoMenuAtendente.estadoConProducto ? 'consultarprodctoconsultor-false':'consultarprodctoconsultor-true'}>
            <div id="dvMenuValtar">
                    <button id="btnVoltar" onClick={handeClickEstadoRegistre}>
                    
                    </button>
            </div>
            <div id="contexConstproduto" className="consteConsulProd">
               <div>
                <input name="seProdConsl" id="serch" placeholder="CodBarra" />
                <button>Buscar</button>
               </div>
               <div id="bodyProducto">

               </div>
            </div>
        </div>
        </>
    )

}
export default ConsultorProductoVendedor;