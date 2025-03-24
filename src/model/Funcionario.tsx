import User from "./User";

 class Funcionario {

    private jwt!:string
    private atribuicao!:string;
    private situacao!:string;
    private estadoDeLogin!:boolean;

    constructor( ){

    }
    
    get getEstadoDeLogin(){
        return this.estadoDeLogin;
    }
    get getToken(){
        return this.jwt
    }

    get getAtribuicao(){
        return this.atribuicao
    }
    get getSituacao(){
        return this.situacao;
    }
    set setToken(token:string){
        this.jwt = token;
    }
    set setEstadoDeLogin(estadoDeLogin:boolean){
        this.estadoDeLogin = estadoDeLogin;
    }
    set setAtribuicao(atribuicao:string){
        this.atribuicao = atribuicao;
    }
    set setSituacao(situacao:string){
        this.situacao = situacao;
    }


}
export default  Funcionario;