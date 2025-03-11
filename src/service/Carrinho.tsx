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
    deleteProduct(id:number){
      const idString = id;

      const products = Carrinho.cart;
      
      console.log(" o id recebido é: "+id);

   
        for(let i =0; i<Carrinho.cart.length;i++){

          if(Carrinho.cart[i].getId()==idString.toString()){
             Carrinho.cart.splice(i,1);
          }
      
        }

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