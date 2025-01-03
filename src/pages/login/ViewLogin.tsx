import ViewModelLogin from "./ViewModelLogin";
import styled from 'styled-components';
import { FormComponet } from "@/components";
import { useEffect } from "react";


const LoginArea = styled.div`
        display:grid;
        grid-template-columns:50% 50%;
        margin: 0% auto auto auto;

    `
const LoginDivInput = styled.div`
        background-color:none;
        height:89vh;
        padding:10% 10% 1% 30%;
    `

const LoginDivLog = styled.div`
        background-image:url(/logo.svg);
        background-repeat: no-repeat;
        background-position:center;
        background-color:#D3D3D3;
    `
const LoginTitle = styled.h1`
        text-align:center;
    
    `
const DivFormulario = styled.div`
       background-color:#4682B4;
       width:40%;
       height:55vh;
       margin-top:10%;
       padding:20px 5% 10px 5%;
       border:1px solid white;

        & input{
            height:35px;
            width:95%;
            margin-top:25px;
            font-size:20px;
            padding:5px;
        }
        & button{
            height:40px;
            width:95%;
            margin-top:15px;
            font-size:20px;
            padding:5px;
            cursor:pointer;
        }
        & form{
            display:grid;
            grid-gap:20px;
            grid-template-row:auto;
        }
        & span{
            display:block;
            margin-top:10%;
            cursor:pointer;
        }
        & h3{
        text-align:center;
         margin-top:20%;
         cursor:pointer;
        }
    `

function ViewLogin({

}:ReturnType<typeof ViewModelLogin>){

    const inputs = [
        {type:'email', placeholder:'email'},
        {type:'password', placeholder:'Senha'},
    ]

    const handlerSumit = async (e:React.FormEvent) => {
        e.preventDefault()
    }


    return(
        <>
            <LoginArea>  
                <LoginDivInput>
                    <DivFormulario>
                        <LoginTitle>login</LoginTitle>
                        <FormComponet
                            inputs={inputs.map((input, index)=>({
                                type:input.type,
                                placeholder:input.type,
                            }))}
                            buttons={[
                                {className:'primary', type:'submit', children:'Login'}
                            ]}
                        />
                        <span> Esqueci a senha:</span>
                        <h3>Quero me Cadastrar</h3>
                    </DivFormulario>
                </LoginDivInput>
                <LoginDivLog>
                </LoginDivLog>
            </LoginArea>
            
        </>
    )
       
    
}

export default ViewLogin;