
import { useContext, useEffect, useState } from "react";
import './caixa.css'
import { EstadoMenuAtendete } from "@/context/useContextMenuAtendente";
import { UserSystemContext } from "@/context/userSistemContext";

function Caixa(){

    const estadoMenuAtendente = useContext(EstadoMenuAtendete);
     const userSystemContext = useContext(UserSystemContext)

    const handeClickMudarEsatdo = () =>{
        estadoMenuAtendente.setEstado(!estadoMenuAtendente.estado)
    }
    const handleClicFTOne =()=>{
        const funTrocoOne = (document.getElementById("fundTOne") as HTMLElement).value;
        alert(` o id do funcionario é: ${userSystemContext.idEmployee} e seu valor é: ${funTrocoOne}`);
    }
    const handleClickFTtwo =()=>{
        const funTrocotwo = (document.getElementById("FundTTwo") as HTMLElement).value;
        alert(` o id do funcionario é: ${userSystemContext.idEmployee} e seu valor é: ${funTrocotwo}`);
    }
    const handleClicFThree =()=>{
        const funTrocoThree = (document.getElementById("fundTThree") as HTMLElement).value;
        alert(` o id do funcionario é: ${userSystemContext.idEmployee} e seu valor é: ${funTrocoThree}`);
    }
    const handleClickFTFour =()=>{
        const funTrocoFour = (document.getElementById("FundTFour") as HTMLElement).value;
        alert(` o id do funcionario é: ${userSystemContext.idEmployee} e seu valor é: ${funTrocoFour}`);
    }
    const handleClickSangrias=()=>{
        const sangrias =(document.getElementById("sangria") as HTMLElement).value;
        alert(` o id do funcionario é: ${userSystemContext.idEmployee} a sangria  é: ${sangrias}`);
    }
    
    useEffect(()=>{
    },[estadoMenuAtendente.estado])

    return(
        <>
            <div className={ estadoMenuAtendente.estado ? 'display-caixa-false':'display-caixa-true'}>
               <div id="dvMenuValtar">
                    <button onClick={handeClickMudarEsatdo} id="btnVoltar">
                    
                    </button>
               </div>
               <div id="contextCaixa">
                    <div className="fund-troco">
                        <label>Fundo Troco Início Primeiro Expediente</label>
                        <input id="fundTOne" type="number" />
                        <button onClick={handleClicFTOne}>salvar</button>
                    </div>
                    <div className="fund-troco">
                        <label>Fundo Troco Fim Primeiro Expediente</label>
                        <input id="FundTTwo" type="number" />
                        <button onClick={handleClickFTtwo}>salvar</button>
                    </div>
                    <div className="fund-troco">
                        <label>Fundo Troco Início Segundo Expediente</label>
                        <input id="fundTThree" type="number"/>
                        <button onClick={handleClicFThree}>salvar</button>
                    </div>
                    <div className="fund-troco">
                        <label>Fundo de Troco Fim  Segundo Expediente</label>
                        <input id="FundTFour" type="number" />
                        <button onClick={handleClickFTFour} >salvar</button>
                    </div>
                    <div className="sangria">
                        <label>Sangria</label>
                        <input id="sangria" type="number" />
                        <button onClick={handleClickSangrias} >Salvar</button>
                    </div>
                    

               </div>

            </div>
        </>
    )
}

export default Caixa;