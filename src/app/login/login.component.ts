import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user=new User("","",0,0,"",true,"");
    message=""
    userId: any;
    user1:User=new User("","",0,0,"",true,"");
    roles:any;
    constructor(private loginService:UserService,private route:Router) { }
    ngOnInit(): void {
      }
    userLogin()
    {
    this.loginService.userLoginService(this.user).subscribe(
      data =>{console.log("Login succes"),
      console.log(data.userid),
      this.user1=data;
      this.userId=data.userid,
      this.validateRole()},
      error =>{console.log("Login failed"),
      this.message="login failed. enter valid userName and password"}
    )
    }
    back()
    {
      this.route.navigate(['/welcomepage'])
    }
    validateRole(){
      if(this.user1.roles=="user")
      this.route.navigate(['homePage',{userId: this.userId}]);
      else
      this.route.navigate(['adminPage',{userId: this.userId}]);
    } 
}
