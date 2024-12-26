import styled from 'styled-components';


const LoginArea = styled.div`
    background-color:red;
    margin:-21px -7px 0px -7px;
    padding:15px;
    `
const LoginDivInput = styled.div`

`

const LoginDivLog = styled.div`

`
const LoginH1Title = styled.h1`
     background-color:blue;
`

function Login(){

    return(
        <>
        <LoginArea>
            <LoginH1Title>login</LoginH1Title>
        </LoginArea>
        </>
    )
}

export default Login;