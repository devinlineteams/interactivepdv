
import { useContext, useEffect, useState } from "react";
import './consultarVendasConsultor.css'
import { EstadoMenuAtendete } from "@/context/useContextMenuAtendente";

function ConsultarVendasConsultor(){

    const estadoMenuAtendente = useContext(EstadoMenuAtendete);

    const handeClickConusltarvendas=()=>{
       
        estadoMenuAtendente.setEstadoVendas(!estadoMenuAtendente.estadoVendas);
    }
    useEffect(()=>{
      },[estadoMenuAtendente.estadoVendas])

    return(
        <>
        <div className={estadoMenuAtendente.estadoVendas ? 'consultarVendas-false':'consultarVendas-true'}>
            <div id="dvMenuValtar">
                    <button id="btnVoltar" onClick={handeClickConusltarvendas}>
                    
                    </button>
            </div>
            <div id="contexConsulVendas">
                <div id="divsearch">
                    <input id="inputsSearchData" name="data" type="date" />
                    <label>Data Inicio</label>
                    <input id="timeInicio" className="timeSearch" name="timeInicio" type="time" />
                    <label>Data Inicio</label>
                    <input id="timeFim" className="timeSearch" name="timeFim" type="time" />
                    <button id="btnSearchVendas" className="inputsSearch" >buscar</button>
                </div>
            </div>
        </div>
        </>
    )

}
export default ConsultarVendasConsultor;