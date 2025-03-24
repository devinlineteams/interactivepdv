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
                                console.log("entrou no get User")
                    
                          await  http.get("/getUserSystema", axiosConfig)
                          .then((response)=>{
                            respoantaRespostaDoSystema = response;
                            return response;
                          })
                          console.log(respoantaRespostaDoSystema)
        }
        catch(erro)   {
            console.log(" entrou no erro pegar usuario do sistema")
        }finally{
            console.log(" entrou no finaly usuario do sistema")
        }
        
    }

}
export default GetUserSystem
