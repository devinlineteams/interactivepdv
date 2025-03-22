import DaoGetAllProdutos from "../dao/GetAllProdutosDao";
import Produto from "../model/Produto";
import Carrinho from "./Carrinho";

class ServiceAllProdutos{

    static getProdutos = new DaoGetAllProdutos();
    

    getProdutoForCodBarra(){

     const allProdutos = ServiceAllProdutos.getProdutos.getAllProdutos();

     return allProdutos;

    }



}
export default ServiceAllProdutos;