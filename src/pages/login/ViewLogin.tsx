import ViewModelLogin from "./ViewModelLogin";
import styled from 'styled-components';

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
                <LoginH1Title>login Mvvm</LoginH1Title>
            </LoginArea>
        </>
    )
       
    
}

export default ViewLogin;