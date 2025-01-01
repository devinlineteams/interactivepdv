class Produto{
    private id!:string;
    private name!:string;
    private category!:string;
    private marca!:string;
    private tom!:string;
    private line!:string;
    private price!:number;
    private codBarra!:string;
    private validity !:string;
    private quantidadeEstoque!:number;
    private quant!:number;
    private vTotal!:number;


    constructor(id:string, name:string,category:string, marca:string, line:string, tom:string, price:number, codBarra:string, validity:string, quantidadeEstoque:number, quant:number){
        this.id = id;
        this.name = name;
        this.category = category;
        this.marca = marca;
        this.line= line;
        this.price = price;
        this.codBarra = codBarra;
        this.validity = validity;
        this.quantidadeEstoque = quantidadeEstoque;
        this.quant = quant;
        
            
        }
        getId(){
            return this.id;
        }
        getName(){
            return this.name;
        }
        getMarca(){
            return this.marca;
        }
        getTom(){
            return this.tom;
        }
        getLine(){
            return this.line;
        }
        getCategory(){
            return this.category;
        }
        getPrice(){
            return this.price
        }
        getCodBarra(){
            return this.codBarra;
        }
        getValidity(){
            return this.validity;
        }
        getQuantidadeEstoque(){
            return this.quantidadeEstoque;
        }
        getVTotal(){
        return this.vTotal;
         }
         getQuant(){
        return this.quant;
        }
        getVtotal(){
           return this.vTotal;
        }

        setId(id:string){
            this.id = id;
        }
        setName(n:string){
            this.name = n;
        }
        setMarca(m:string){
            this.marca = m;
        }
        setTom(t:string){
            this.tom = t;
        }
        setLine(l:string){
            this.line = l;
        }
        setCategory(c:string){
            this.category = c;
        }
        setPrice(p:number){
            this.price = p;
        }
        setCodBarra(cb:string){
            this.codBarra =cb;
        }
        setValidity(v:string){
            this.validity = v;
        }
        setQuantidadeEstoque(q:number){
            this.quantidadeEstoque = q;
        }
        setQuant(qt:number){
            this.quant =qt;
        }
        setvTotla(quant:number){
           this.vTotal = quant*this.price;
    
        }



}
export default Produto;