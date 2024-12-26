
import ViewLogin from './ViewLogin';
import ViewModelLogin from './ViewModelLogin';

function Login(){

    const viewModelLogin = ViewModelLogin()

    return(
        <ViewLogin
        {... viewModelLogin}
        />
    )
}

export default Login;