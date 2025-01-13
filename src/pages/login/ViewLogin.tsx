import ViewModelLogin from "./ViewModelLogin";
import styled from 'styled-components';
import { FormComponet } from "@/components";
import { useEffect } from "react";


const LoginArea = styled.div`
 @media only screen and (max-width: 3000px) {
     
    }
   @media only screen and (max-width: 2400px) {
   
    }
    @media only screen and (max-width: 1800px) {
   
    }
    @media only screen and (max-width: 1500px) {
     
    }
    @media only screen and (max-width: 1000px) {
     
    }
    @media only screen and (max-width: 800px) {

    }
    @media only screen and (max-width: 600px) {

    }
        display:grid;
        grid-template-columns:50% 50%;
        margin: 0% auto auto auto;

    `
const LoginDivInput = styled.div`
    @media only screen and (max-width: 3000px) {
        background-color:none;
        height:100vh;
    }
   @media only screen and (max-width: 2400px) {
   
    }
    @media only screen and (max-width: 1800px) {
   
    }
    @media only screen and (max-width: 1500px) {
     
    }
    @media only screen and (max-width: 1000px) {
     
    }
    @media only screen and (max-width: 800px) {

    }
    @media only screen and (max-width: 600px) {

    }

    `

const LoginDivLog = styled.div`
   @media only screen and (max-width: 3000px) {
       background-image:url(/logo.svg);
        background-repeat: no-repeat;
        background-position:center;
        background-color:#D3D3D3;
         height:100vh;
    }
   @media only screen and (max-width: 2400px) {
   
    }
    @media only screen and (max-width: 1800px) {
   
    }
    @media only screen and (max-width: 1500px) {
     
    }
    @media only screen and (max-width: 1000px) {
     
    }
    @media only screen and (max-width: 800px) {

    }
    @media only screen and (max-width: 600px) {

    }
     
    `
const LoginTitle = styled.h1`
        text-align:center;
    
    `
const DivFormulario = styled.div`
  @media only screen and (max-width: 3000px) {
        width:35%;
        margin-left:32.5%;
        margin-right:32.5%;
    }
   @media only screen and (max-width: 2400px) {
        width:45%;
        margin-left:27.2%;
        margin-right:27.5%;
    }
    @media only screen and (max-width: 1800px) {
        width:60%;
        margin-left:20%;
        margin-right:20%;
    }
    @media only screen and (max-width: 1500px) {
        width:70%;
        margin-left:15%;
        margin-right:15%;
    }
    @media only screen and (max-width: 1000px) {
        width:95%;
        margin-left:2.5%;
        margin-right:2.5%;
    }
    @media only screen and (max-width: 800px) {
        width:95%;
        margin-left:2.5%;
        margin-right:2.5%;
    }
    @media only screen and (max-width: 600px) {
        width:95%;
        margin-left:2.5%;
        margin-right:2.5%;
    }

       background-color:#4682B4;
       width:40%;
       height:55vh;
       margin-top:10%;
       padding:20px 0px 10px 0%;
       border:1px solid white;

        & input{
            height:35px;
            width:90%;
            margin-top:25px;
            margin-left:2.5%;
            font-size:20px;
            padding:5px;
        }
        & button{
            height:40px;
            width:95%;
            margin-top:15px;
            margin-left:2.5%;
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