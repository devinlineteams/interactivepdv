
import { EstadoCaixaType } from "@/model/profileData";
import {createContext, useState,Children, ReactNode} from "react";

type EstadoCaixaProps ={
    children:ReactNode
}

const estadoComponentesMenuAtendete ={
    estado:false,
    estadoRegistre:false,
    estadoCadCliente:false,
    estadoConProducto:false,
    estadoVendas:false,
    setEstado:()=>{},
    setEstadoRegistre:()=>{},
    setEstadoCadCliente:()=>{},
    setEstadoConPorducto:()=>{},
    setEstadoVendas:()=>{}
}

export const EstadoMenuAtendete = createContext<EstadoCaixaType>(estadoComponentesMenuAtendete);

export const EstadoCaixaProvider = ({children}:EstadoCaixaProps)=>{

    const [estado, setEstado] = useState(estadoComponentesMenuAtendete.estado)
    const [estadoRegistre, setEstadoRegistre] = useState(estadoComponentesMenuAtendete.estadoRegistre)
    const [estadoCadCliente, setEstadoCadCliente] = useState(estadoComponentesMenuAtendete.estadoCadCliente)
    const [estadoConProducto, setEstadoConPorducto] = useState(estadoComponentesMenuAtendete.estadoConProducto)
    const [estadoVendas, setEstadoVendas] = useState(estadoComponentesMenuAtendete.estadoVendas)


        return(
            <EstadoMenuAtendete.Provider value={{estado, estadoRegistre,estadoCadCliente,estadoConProducto,estadoVendas, setEstado, setEstadoRegistre,setEstadoCadCliente, setEstadoConPorducto, setEstadoVendas}}>
                 {children}
            </EstadoMenuAtendete.Provider>
        )
}