import ViewModelLogin from "./ViewModelLogin";
import styled from 'styled-components';

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

import { userFormValidation, usePost } from "@/hooks";
import { MessegaPorps, LoginData, LoginPostData, DecodedJwt } from "@/types";
import { FormComponet } from "@/components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode} from "jwt-decode";
import Cookies from 'js-cookie';
import { jwtExpirationDateConvert } from "@/utils";
import GetAllProdutosDao from "@/dao/GetAllProdutosDao";
import UserSystems from "@/service/UserSystem";

function ViewLogin({

}:ReturnType<typeof ViewModelLogin>){

    const navigate = useNavigate()

    const inputs = [
        {type:'email', placeholder:'email'},
        {type:'password', placeholder:'Senha'},
    ]
    const {data, loading, error, postData }= usePost<LoginData, LoginPostData>('login');

    const {formValues, formValid, handleChange} = userFormValidation(inputs);

    const handleMessage = ():MessegaPorps=>{

        if(!error) return {msg:'',type:'success'}
        switch(error){
            case 401:
                return{
                    msg:'Email ou senha invalida',
                    type: 'error',
                }
            default:
                return{
                    msg:" Não foi possível realizar a operação. contate o suporte",
                    type: 'error'
                }
        }
    }

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        console.log(formValues[1]);
        await postData({
            email:String(formValues[0]),
            password:String(formValues[1])
        })
       
    }
    const getUserSystem = (token:string)=>{
        let userSystem = new UserSystems();
        userSystem.getUserSystem(token);
        
    }
    useEffect(()=>{
        if(data?.jwt_token){
            const decoded:DecodedJwt = jwtDecode(data?.jwt_token);
            Cookies.set('Authorization',data?.jwt_token,{
                expires:jwtExpirationDateConvert(decoded.exp),
                secure:true
            })
            if(Cookies.get('Authorization')){
                const token:string = String(Cookies.get('Authorization'));
                GetAllProdutosDao.prototype.getAllProductoServdor(token)

                getUserSystem(token);

                navigate('/pdv')
            } 
        }
    },[data, navigate])

    return(
        <>
            <LoginArea>  
                <LoginDivInput>
                    <DivFormulario>
                        <LoginTitle>login</LoginTitle>
                        <FormComponet
                            inputs={inputs.map((input, index)=>({
                                type:input.type,
                                placeholder:input.placeholder,
                                value:formValues[index] || '',
                                onChange:(e: ChangeEvent<HTMLInputElement>) => handleChange(index,(e.target as HTMLInputElement).value)
                            }))}
                            buttons={[
                                {
                                    className:'primary',
                                    disabled: !formValid || loading,
                                    type:'submit',
                                    onClick: handleSubmit,
                                    children:loading? 'aguarde...':'Login',
                                    
                                }
                            ]}
                            message={handleMessage()}
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

// login dnc  jnojair2010@gmail.com

// password:  JnoJair201015130282