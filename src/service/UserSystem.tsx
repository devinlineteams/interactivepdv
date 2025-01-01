import DaoLogar from '../dao/LogarSystem';
import Funcionario from '../model/Funcionario';


class UserSystems{



    static UserOfSystem = new Funcionario("","","",false,"","","","","","","","","","");

   static Logar(login:string, password:string){

     const usuarioRetornado = DaoLogar.prototype.daoLogar(login, password)

     UserSystems.UserOfSystem.setAtribuicao = usuarioRetornado[0].atrinuicao;
     UserSystems.UserOfSystem.setEstadoDeLogin = usuarioRetornado[0].estadoDeLogin;
     UserSystems.UserOfSystem.setSituacao = usuarioRetornado[0].situacao;
     const userInLogged = {atribuicao:usuarioRetornado[0].atrinuicao, estadoOfLogin:usuarioRetornado[0].estadoDeLogin, situation:usuarioRetornado[0].situacao}
     sessionStorage.setItem("loggedInUser",JSON.stringify(userInLogged));
  
   }
}

export default UserSystems;
