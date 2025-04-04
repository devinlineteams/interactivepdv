export interface userSistem{
    idEmployee:number,
    assignment:string,
    situation:boolean,
    idLogin:number,
    userId:number,
    idCompany:number,
    idLogin: number,
    userId: number,
    userName: styring,
    userSobreName:string,
    email: string,
    cpf:string

}
export interface CompanyModel {

    cnpj:string,
    companyName:string,
    idEmployee:number

}
export interface Producto{
    index:number,
    batch:string,
    codBarra:string,
    dateRegistre:string,
    idProducto:number,
    idSupplier:number,
    line:string,
    mark:string,
    nameProduto:string,
    notafiscal:string,
    pricePurchase:Number
    priceSales:Number
    validity:string,
    quantidadeEstoque:number;
    quant:Number;
    vTotal:Number;
    discount:Number,
    funcaoDeleteItem:Function
    functionDesconto:Function
}

export interface EstadoCaixaType{
    estado:boolean,
    estadoRegistre:boolean,
    estadoCadCliente:boolean,
    estadoConProducto:boolean,
    estadoVendas:boolean,
    setEstado:(newsState:boolean)=>void;
    setEstadoRegistre:(newsState:boolean)=>void;
    setEstadoCadCliente:(newsState:boolean)=>void;
    setEstadoConPorducto:(newsState:boolean)=>void;
    setEstadoVendas:(newsState:boolean)=>void;
}