
import { useContext, useEffect, useState } from "react";
import './cadCliente.css'
import { EstadoMenuAtendete } from "@/context/useContextMenuAtendente";

function CadastrarClienteConsultor(){

    const estadoMenuAtendente = useContext(EstadoMenuAtendete);
    const [endereco, setEndereco] = useState(false)

    const handeClickEstadoCdaCliente =()=>{
       
        estadoMenuAtendente.setEstadoCadCliente(!estadoMenuAtendente.estadoCadCliente);
    }

    const handleChangegetCep = async (e) =>{
        const {value} = e.target;
        console.log(value)
            if(value.length >7){
                const logradouro = fetch('https://viacep.com.br/ws/'+value+'/json/', { mode:  'cors',method: 'GET',headers: {'Content-Type': 'application/json'}});
                logradouro.then((resposta)=>{
                    const objeto = resposta.json()
                    return objeto;
                })
                .then((res)=>{
                    console.log(res)
                    if(res.erro==='true'){
                        alert("Cep Invalido");
                    } else{
                        let logradouro = (document.getElementById('endLogra') as  HTMLElement).value = res.logradouro;
                        let bairro = (document.getElementById('endBairro') as  HTMLElement).value = res.bairro;
                        let cidade = (document.getElementById('endCidade') as  HTMLElement).value = res.localidade;
                        let estado = (document.getElementById('endEst') as  HTMLElement).value = res.estado;
                    }
                    
        
                })
            }else{

            }
    }

    useEffect(()=>{
      },[estadoMenuAtendente.estadoVendas])

    return(
        <>
        <div className={estadoMenuAtendente.estadoCadCliente ? 'cadClienteConsultor-false':'cadClienteConsultor-true'}>
            <div id="dvMenuValtar">
                    <button id="btnVoltar" onClick={handeClickEstadoCdaCliente}>
                    
                    </button>
            </div>
            <div className="contexCadCliente">
                <h1>Cadastro de cliente</h1>
                <div className="form">
                    <input name="cpf" placeholder="CPF" />
                    <input name="name"  placeholder=" Nome"/>
                    <input name="cep" onChange={handleChangegetCep} placeholder="cep" />
                    <input name="logradouro" id="endLogra" placeholder="Logradouro"/>
                    <input name="bairro" id="endBairro" placeholder="bairro" />
                    <input name="numero" id="ednNumero" placeholder="Numero" />
                    <input name="cidade" id="endCidade" placeholder="cidade" />
                    <input name="estado" id="endEst" placeholder="Estado"/>
                    <button id="btnSalvar">salvar</button>
                </div>
            </div>
        </div>
        </>
    )

}
export default CadastrarClienteConsultor;