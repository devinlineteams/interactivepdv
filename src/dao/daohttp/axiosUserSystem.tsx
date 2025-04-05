import axios, {AxiosRequestConfig} from 'axios';
import { http } from "../daohttp/axiosPost"

class GetUserSystem{

    async getUserSystema(token:string){

        let respoantaRespostaDoSystema;

        try{

            const axiosConfig = {
                                    headers:{
                                        "Access-Control-Allow-Origin": "*",
                                        "Access-Control-Allow-Headers": "Authorization", 
                                        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                                        "Content-Type": "application/json;charset=UTF-8",
                                        "authorization":token
                                    }
                                }
                    
                         let user =  await  http.get("/getUserSystema", axiosConfig)
                                    .then((response)=>{
                                        respoantaRespostaDoSystema = response;
                                        return response.data;
                                    })
                        return user;
        }
        catch(erro)   {
            console.log(" entrou no erro pegar usuario do sistema")
        }finally{

        }
        
    }

}
export default GetUserSystem
