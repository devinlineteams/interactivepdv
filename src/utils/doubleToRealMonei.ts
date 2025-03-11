import { options } from "node_modules/axios/index.d.cts";
import { replace } from "react-router-dom";

/**
 *  Convert Numero double em valores de real
 *  * @param valorDouble- valor vindo do banco de dado
 * @return retorna preço em real
 */
export function covertDoubleEmReal(valorDouble:Number):string{

    const moeda = valorDouble.toLocaleString()

    let novoValor = String(valorDouble).replace(".",",")

    return moeda;
}