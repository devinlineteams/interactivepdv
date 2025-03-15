import { Producto } from "@/model/Producto";


class Carrinho{

    static valueTotal:number = 0;
    static totalItem:number =0;
    static productAdd:Producto;
   
  

    static cart:Producto[] = [

    ];

    addProductToTheCart(producto:Producto){
     
     Carrinho.cart.push(producto);

    }
    deleteProduct(index:number){
      Carrinho.cart.splice(index,1)
    }
    setDescontoItemCart(index:number, desc:number){
          const prod:Producto ={
            batch :Carrinho.cart[index].batch,
            codBarra :Carrinho.cart[index].codBarra,
            dateRegistre :Carrinho.cart[index].dateRegistre,
            idProducto :Carrinho.cart[index].idProducto,
            idSupplier :Carrinho.cart[index].idSupplier,
            index :Carrinho.cart[index].index,
            line :Carrinho.cart[index].line,
            mark :Carrinho.cart[index].mark,
            nameProduto :Carrinho.cart[index].nameProduto,
            notafiscal :Carrinho.cart[index].notafiscal,
            pricePurchase :Carrinho.cart[index].pricePurchase,
            priceSales :Carrinho.cart[index].priceSales,
            quant :  Carrinho.cart[index].quant,
            quantidadeEstoque :Carrinho.cart[index].quantidadeEstoque,
            validity :Carrinho.cart[index].validity,
            discount:desc,
            vTotal : ((Number(Carrinho.cart[index].priceSales) * Number(Carrinho.cart[index].quant))  - Number(desc)),
        
          };

           Carrinho.cart.splice(index, 1, prod);

          // console.log(prod)
    }
    static calcValorTotal(vt:number){
      Carrinho.valueTotal+=vt;
    }
    getTotalValue(){
      return Carrinho.valueTotal;
    }
    getTotalItem(){
      return Carrinho.cart.length;
    }
    getCartForLi(){

      return Carrinho.cart;
    }


    /*
    calcularDesconto(v:number){

        return newValue;
    }
          discountPorductos(value:number){

        //this.calcularDesconto(value);
    }
        
    */

}
export default Carrinho;

// Adicionar ao início de um array
//Array.unshift(elemento);

// Adicionar ao final de um array
//Array.push(elemento);

// Adicionar em uma posição especificada
//Array.splice(posicao_inicial, 0, novo_elemento...);

// Adicionar com o método concat sem alterar o array original
//let novoArray = [].concat(array, elemento);

//https://www.freecodecamp.org/portuguese/news/como-inserir-um-elemento-em-um-array-em-js/