import { options } from "node_modules/axios/index.d.cts";
import { replace } from "react-router-dom";

/**
 *  Convert Numero double em valores de real
 *  * @param valorDouble- valor vindo do banco de dado
 * @return retorna preço em real
 */
export function covertDoubleEmReal(valorDouble:number):string{

    var intl = new Intl.NumberFormat("pt-BR", { 
        style: "currency", 
        currency: "BRL"
      });

    var valor = valorDouble;
    var moeda = intl.format((valor / 1));

    return moeda;
}