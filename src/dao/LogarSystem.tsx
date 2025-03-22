import Funcionario from "../model/Funcionario";

class LogarSystem{


  daoLogar(login:string, password:string){

    const objetoUsuario = [
        {
            Login:"jnojair",
            atrinuicao:"vendedor",
            password:"123456",
            situacao:"ativo",
            estadoDeLogin:true
        }
    ]

      return objetoUsuario;
    }

}
export default LogarSystem;

//https://typescript.tv/errors/