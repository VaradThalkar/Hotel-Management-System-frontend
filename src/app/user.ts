export class User { 
  userName: String;
  name: String;
  contactNumber: number;
  aadharNumber: number;
  password: String;
  active: boolean;
  roles: String;
  constructor( userName:string, name:string, contactNumber:number,aadharNumber:number, password:string, active:boolean, roles:string){
    this.userName=userName;
    this.name=name;
    this.contactNumber=contactNumber;
    this.aadharNumber=aadharNumber;
    this.password=password;
    this.active=active;
    this.roles=roles;
  }
    //constructor(
    //    userName:string,
    //    name:string,
     //   contactNumber:number,
     //   aadharNumber:number,
     //   password:string,
     //  active:boolean,
    //    roles:string
   // ){
        
   // }
}