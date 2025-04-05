import User from "./User";

 class Funcionario {

    private jwt!:string
    private assignment!:string;
    private situacao!:boolean;
    private name!:string;
    private sobreName!:string;
    private cpf!:string;
    private idCompany!:number;
    private idEmloyee!:number;
    private idLogin!:number;
    private userId!:number;
    private email!:string;

    constructor( ){

    }
    
    get getJwt(){
        return this.jwt;
    }
    get getAssignment(){
        return this.assignment;
    }
    get getSituacao(){
        return this.situacao;
    }
    get getName(){
        return this.name;
    }
    get getSobreNome(){
        return this.sobreName
    }
    get getIdCompany(){
        return this.idCompany
    }
    get getIdEmployee(){
        return this.idEmloyee
    }
    get getIdLogin(){
        return this.idLogin;
    }
    get getUserId(){
        return this.userId;
    }
    get getCpf(){
        return this.cpf;
    }
    get getEmail(){
        return this.email;
    }

    set setJwt(jwt:string){
       this.jwt = jwt;
    }
   set setAssignment(assignment:string){
      this.assignment = assignment;
    }
   set setSituacao(situacao:boolean){
       this.situacao = situacao;
    }
   set setName(name:string){
        this.name = name;
    }
   set setSobreNome(sobreName:string){
        this.sobreName = sobreName;
    }
   set setIdCompany(idCompany:number){
        this.idCompany = idCompany;
    }
   set setIdEmployee(idEmployee:number){
       this.idEmloyee = idEmployee;
    }
   set setIdLogin(idLogin:number){
        this.idLogin = idLogin;
    }
   set setUserId(userId:number){
        this.userId = userId;
    }
    set setCpf(cpf:string){
        this.cpf = cpf;
    }
    set setEmail(email:string){
        this.email = email;
    }

}
export default  Funcionario;