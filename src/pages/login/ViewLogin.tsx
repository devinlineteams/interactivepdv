import ViewModelLogin from "./ViewModelLogin";
import styled from 'styled-components';
import { FormComponet } from "@/components";

const LoginArea = styled.div`
    padding:15px;
    `
const LoginDivInput = styled.div`

`

const LoginDivLog = styled.div`

`
const LoginH1Title = styled.h1`
    
`

function ViewLogin({

}:ReturnType<typeof ViewModelLogin>){

    return(
        <>
            <LoginArea>
                <LoginH1Title>login</LoginH1Title>
            </LoginArea>
            <FormComponet
                inputs={[
                    {type:'email', placeholder:'E-mail'},
                    {type:'password', placeholder:'password'}
                ]}
                buttons={[
                    {className:'primary', type:'submit', children:'Login'}
                ]}
            />
        </>
    )
       
    
}

export default ViewLogin;