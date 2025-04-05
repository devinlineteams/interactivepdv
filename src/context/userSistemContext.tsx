import { userSistem } from "@/model/profileData";
import { UserSystem } from "@/service";
import {createContext, useState,Children, ReactNode} from "react";

type UsuarioContextprops ={
    children:ReactNode
}

type usarioContextType ={
    idEmployee:number,
    idCompany:number,
    nameUserSystem:string,
    nameCompnay:string,
    setIdCompany:(newsState:number)=>void;
    setIdEmployee:(newState:number)=>void;
    setNameUserSystem:(newState:string)=>void;
    setNameCompany:(newState:string)=>void;
};

const usuario = {
    idEmployee:0,
    idCompany:0,
    nameUserSystem:'',
    nameCompnay:'',
    setIdCompany:()=>{},
    setIdEmployee:()=>{},
    setNameUserSystem:()=>{},
    setNameCompany:()=>{}
};

    
export const UserSystemContext = createContext<usarioContextType>(usuario);

export const UserSystemProvider = ({children}:UsuarioContextprops)=>{

    const [idEmployee, setIdEmployee] = useState(usuario.idEmployee)
    const [idCompany, setIdCompany] = useState(usuario.idCompany)
    const [nameUserSystem, setNameUserSystem] = useState(usuario.nameUserSystem)
    const [nameCompnay, setNameCompany] = useState(usuario.nameCompnay)

    return(
        <UserSystemContext.Provider value={{idEmployee, idCompany, nameUserSystem,nameCompnay, setIdEmployee,  setIdCompany, setNameUserSystem, setNameCompany}}>
            {children}
        </UserSystemContext.Provider>
    )
}