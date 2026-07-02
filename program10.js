let DATA="secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
 }
 viewData(){
    console.log("data=",DATA);
 } 
}
class admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="new secret information";
    }
}
let student1=new User("rutuja","ritu@email.com");
let student2=new User("uday","uday@email.com");

let teacher1=new User("principal","principal@email.com");
let admin=new admin("admin","admin@email.com");