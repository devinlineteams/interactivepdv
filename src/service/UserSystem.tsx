import GetUserSystem from '@/dao/daohttp/axiosUserSystem';
import DaoLogar from '../dao/LogarSystem';
import Funcionario from '../model/Funcionario';
import { useContext } from 'react';
import { UserSystemContext } from '@/context/userSistemContext';


class UserSystems{


  static UserOfSystem = new Funcionario();

  static Logar(login:string, password:string){

     const usuarioRetornado = DaoLogar.prototype.daoLogar(login, password)
         /*
         UserSystems.UserOfSystem.setAtribuicao = usuarioRetornado[0].atrinuicao;
         UserSystems.UserOfSystem.setEstadoDeLogin = usuarioRetornado[0].estadoDeLogin;
         UserSystems.UserOfSystem.setSituacao = usuarioRetornado[0].situacao;
         */
     const userInLogged = {atribuicao:usuarioRetornado[0].atrinuicao, estadoOfLogin:usuarioRetornado[0].estadoDeLogin, situation:usuarioRetornado[0].situacao}
     sessionStorage.setItem("loggedInUser",JSON.stringify(userInLogged));
  
   }


   async getUserSystem(token:string){
      UserSystems.UserOfSystem.setJwt= token;
      let getUserSystema = new GetUserSystem();
      let user = getUserSystema.getUserSystema(token);
      await  user.then((response)=>{
            UserSystems.UserOfSystem.setAssignment = response['assignment'];
            UserSystems.UserOfSystem.setCpf = response['cpf'];
            UserSystems.UserOfSystem.setEmail = response['email'];
            UserSystems.UserOfSystem.setIdEmployee = response['idEmployee'];
            UserSystems.UserOfSystem.setIdLogin = response['idLogin'];
            UserSystems.UserOfSystem.setSituacao = response['situation'];
            UserSystems.UserOfSystem.setUserId = response['userId'];
            UserSystems.UserOfSystem.setName = response['userName'];
            UserSystems.UserOfSystem.setSobreNome =response['userSobreName'];
        
            return response
         })
         return user;
       
   }
}

export default UserSystems;
