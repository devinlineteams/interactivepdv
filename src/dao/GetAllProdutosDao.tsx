import { http } from "./daohttp/axiosPost"
import { Producto } from "@/model/Producto"

class GetAllProdutosDao{
    

     Produtos:Producto[]=[]

    async getAllProductoServdor(idCompnay:number){

       try{
            const axiosConfig = {headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Authorization", 
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                    "Content-Type": "application/json;charset=UTF-8",
                    }}
            
                    console.log("entrou no getAll produto servidor")
              await  http.get("/getAllproducto?idCompany="+idCompnay, axiosConfig)
                .then((response)=>{this.Produtos = response.data})
             
            }catch(erro)   {
                console.log(` erro get all produto ${erro}`)
            }finally{
                console.log("entrou no finaly get all produto")
            }
           
            return this.Produtos;
    }

    getAllProdutos(){
       
            return  this.Produtos;
    }

    getProducto(codigoBarra:string):Producto{

        let newProduto!:Producto;

        this.Produtos.filter(produto=>{
            newProduto = produto;
        })

        return newProduto;
    }


}
export default GetAllProdutosDao;