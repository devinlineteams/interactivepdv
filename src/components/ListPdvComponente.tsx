import { Producto } from '@/model/Producto'
import { Carrinho } from '@/service';
import {ListPorductoDisplayPdv} from '@/types';
import './styleListPdvComponent.css';
import { covertDoubleEmReal } from '@/utils';




 function ListPdvComponente(prosp:Producto){

    const {index, batch, codBarra, quant,dateRegistre, idProducto, idSupplier, line, mark, nameProduto, notafiscal, pricePurchase, priceSales, validity, funcaoDeleteItem, vTotal, functionDesconto} = prosp

    const handClickDeletProduct = (id:number)=>{
        return id;
    }

    const handleChangeDesconto = (index:number)=>{
        return index
    }
    const handleChangeTreatDiscount=(desconto:string)=>{

      let string = desconto;
      let array = string.split('');
      let filtro = array.filter((valor)=>{
       return valor.includes(",")
      })
      let vDiscount;
      if(filtro.length>0){
      vDiscount = desconto.replace(",",".")
      }else{
        vDiscount = desconto
      }

        return vDiscount;
    }
   

    return(
    
        <li key={index} id={`id${String(index)}`} className="li-list-product">  
                <label>{index+1}</label>
                <label>{nameProduto}</label>
                <label>{`${quant}`} </label>
                <label>{covertDoubleEmReal( priceSales)}</label>
                <label>{covertDoubleEmReal(vTotal)} </label>
                <button  key={index}  id="delete" className='btn-delete-li mg-btn-li'
                onClick={()=>{
                            const id = handClickDeletProduct(index);
                            funcaoDeleteItem(id)
                        }
                    }
                ></button> 
                <input   id="descontoProduto"
                    onChange={(e)=>{
                        const v = e.target.value;
                        const discount = handleChangeTreatDiscount(v)
                        const id = handleChangeDesconto(index);
                        functionDesconto(id, discount)
                    }}
                /> 
        </li>   
            
    )
}
export default  ListPdvComponente;

