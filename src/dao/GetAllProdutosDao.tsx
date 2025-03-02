import { http } from "./daohttp/axiosPost"
import { Producto } from "@/model/Producto"

class GetAllProdutosDao{
    

   Produtos:Producto[]=[]

    async getAllProductoServdor(){
        console.log("entrou no getAllProduto")
       try{
            const axiosConfig = {headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Authorization", 
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                    "Content-Type": "application/json;charset=UTF-8",
                    "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0MDc4NjQ3MSwiZXhwIjoxNzQwNzg2NzcxfQ.vIyG4zYm8kAoF5MSHydSiu6aFCHE5EV5sn_gNnBknkI"
                    }}
            
                    console.log("entrou no click")
                /* getAllProducto("/getAllproducto")*/
              await  http.post("/getAllproducto",{"":""}, axiosConfig).then((response)=>{this.Produtos = response.data})
             
            }catch(erro)   {
                console.log(" entrou no erro get all produto")
            }finally{
                console.log(" entrou no finaly do get all produto")
            }

            console.log(this.Produtos);
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