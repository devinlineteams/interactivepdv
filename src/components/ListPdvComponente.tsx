import { Producto } from '@/model/Producto'
import { Carrinho } from '@/service';
import {ListPorductoDisplayPdv} from '@/types';
import './styleListPdvComponent.css';
import { covertDoubleEmReal } from '@/utils';


 function ListPdvComponente(prosp:Producto){

    const {index, batch, codBarra, quant,dateRegistre, idProducto, idSupplier, line, mark, nameProduto, notafiscal, pricePurchase, priceSales, validity, funcaoDeleteItem, vTotal} = prosp

    const handClickDeletProduct = (id:number)=>{

        return id;
    }
   

    return(
    
        <li id={`id${String(index)}`} className="li-list-product">  
                <label>{index+1}</label>
                <label> {covertDoubleEmReal(quant)}</label>
                <label>{nameProduto}</label>
                <label>{covertDoubleEmReal( priceSales)}</label>
                <label> {covertDoubleEmReal(vTotal)} </label>
                <button id="delete" className='btn-delete-li mg-btn-li'
                onClick={()=>{
                            const id = handClickDeletProduct(index);
                            funcaoDeleteItem(id)
                        }
                    }
                ></button>  
        </li>   
            
    )
}
export default  ListPdvComponente;

