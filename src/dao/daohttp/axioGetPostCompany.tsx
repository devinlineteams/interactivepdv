import axios, {AxiosRequestConfig} from 'axios';
import { http } from "../daohttp/axiosPost"

class AxiosGetPostCompany{

    async getAllCompanyEmployee(idEmployee:number){

        let respoantaRespostaDoSystema;

        try{
            const axiosConfig = {
                                    headers:{
                                        "Access-Control-Allow-Origin": "*",
                                        "Access-Control-Allow-Headers": "Authorization", 
                                        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                                        "Content-Type": "application/json;charset=UTF-8",
                                    },
                                }
                    
                         let user =  await  http.get("/getAllCompanyEmployee?idEmployee="+idEmployee, axiosConfig)
                                    .then((response)=>{
                                        respoantaRespostaDoSystema = response;
                                        return response.data;
                                    })
                        return user;
        }
        catch(erro)   {
            console.log(" entrou no erro pegar get Al company")
        }finally{
            
        }
        
    }

}
export default AxiosGetPostCompany;
