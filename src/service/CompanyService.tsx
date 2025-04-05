import AxiosGetPostCompany from "@/dao/daohttp/axioGetPostCompany";

class CompanyService{


    async getAllCompany(idEmployee:number){
        let axiosGetCompany = new AxiosGetPostCompany();
        let resposta = axiosGetCompany.getAllCompanyEmployee(idEmployee);
        await resposta.then((response)=>{
               return response;
            })

            return resposta;
    }

}
export default CompanyService;