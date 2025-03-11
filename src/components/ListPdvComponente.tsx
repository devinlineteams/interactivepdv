import { Producto } from '@/model/Producto'
import { Carrinho } from '@/service';
import {ListPorductoDisplayPdv} from '@/types';
import './styleListPdvComponent.css';
import { covertDoubleEmReal } from '@/utils';


 function ListPdvComponente(prosp:Producto){

    const {index, batch, codBarra, quant,dateRegistre, idProducto, idSupplier, line, mark, nameProduto, notafiscal, pricePurchase, priceSales, validity, funcaoDeleteItem, vTotal} = prosp

    const handClickDeletProduct = (id:number)=>{
        console.log(` o i listpdv é ${id}`)
        return id;
    }
   

    return(
    
        <li id={`id${String(index)}`} className="li-list-product">  
                <label> {covertDoubleEmReal(quant)}</label>
                <label>{nameProduto}</label>
                <label></label>
                <label>{covertDoubleEmReal( priceSales)}</label>
                <label> { covertDoubleEmReal(vTotal)} </label>
                <label id="delete" className="btn-delete-li mg-btn-li"></label>
                <label id="plus-item"></label>
                <button
                onClick={()=>{
                            const id = handClickDeletProduct(idProducto);
                            funcaoDeleteItem(id)
                        }
                    }
                ></button>  
        </li>   
            
    )
}
export default  ListPdvComponente;

