import Endereco from "./Endereco";

class User extends Endereco{
    private nome!:string;
    private sobreNome!:string;
    private email!:string;
    private cpf!:string;

    constructor(nome:string, sobrenome:string, email:string, cpf:string, logradouro:string, numero:string, bairro:string, cidade:string, uf:string, complemento:string){
        super(logradouro, numero, bairro, cidade, uf, complemento);
        this.nome = nome;
        this.sobreNome = sobrenome;
        this.email = email;
        this.cpf = cpf;
    }


    get getNome(){
        return this.nome;
    }
    get getSobreNome(){
        return this.sobreNome;
    }
    get getEmail(){
        return this.email;
    }
    get getCpf(){
        return this.cpf
    }
    set setNome(nome:string){
        this.nome = nome;
    }
    set setSobreNome(sobreNome:string){
        this.sobreNome = sobreNome;
    }
    set setEmail(email:string){
        this.email = email;
    }
    set setCpf(cpf:string){
        this.cpf = cpf;
    }


}
export default User;