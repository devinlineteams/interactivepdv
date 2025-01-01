class GetAllProdutosDao{
    

    Produtos =[
        {id:"1", name:"Linp Glos 1 ", category:"Makup", marca:"Lady Beauty", line:"Clear", tom:"Frult", price:15.50, codBarra:"7898968202924", validity:"2029", quantidadeEstoque:10},
        {id:"2", name:"Gloss Linp 2", category:"Makup", marca:"Lady Beauty", line:"Clear", tom:"Frult", price:11.25, codBarra:"7898968202863", validity:"2029", quantidadeEstoque:10},
        {id:"3", name:"Brilho labial 3 ", category:"Makup", marca:"Lady Beauty", line:"Clear", tom:"Frult", price:10.00, codBarra:"7898968202894", validity:"2029", quantidadeEstoque:10},
        {id:"4", name:"Base", category:"Makup", marca:"Ruby Rose", line:"Softmatte", tom:"1", price:19.50, codBarra:"123456", validity:"2026", quantidadeEstoque:5},
        {id:"5", name:"Base", category:"Makup", marca:"Ruby Rose", line:"Softmatte", tom:"2", price:19.50, codBarra:"7894567", validity:"2026", quantidadeEstoque:16},
        {id:"6", name:"Base", category:"Makup", marca:"Ruby Rose", line:"Softmatte", tom:"3", price:19.50, codBarra:"789456776", validity:"2026", quantidadeEstoque:3},
        {id:"7", name:"Base", category:"Makup", marca:"Belle Angel", line:"Softmatte", tom:"4", price:18.00, codBarra:"78945754", validity:"2026", quantidadeEstoque:10},
        {id:"8", name:"Base", category:"Makup", marca:"Fenza", line:"fenzVerde", tom:"4", price:10.00, codBarra:"78945612344", validity:"2026", quantidadeEstoque:9},
        {id:"9", name:"Base", category:"Makup", marca:"Vivai", line:"vivBabe", tom:"4", price:10.00, codBarra:"7894565533", validity:"2026", quantidadeEstoque:7}
    ]

   getAllProdutos(){
        return  this.Produtos;
    }
}
export default GetAllProdutosDao;