import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  user=new User("","",0,0,"",true,"");
  status:any;
  userId:any;
  message=""
    constructor(private userService:UserService,private route:Router) { }
  
    ngOnInit(): void {
      
    }
  submitUserName()
  {
    this.userService.getUserByUserName(this.user).subscribe(
      data=>{console.log(data),
        alert("Success......enter new password")
      this.userId=data.userid,
  this.user=data
  this.status=true},
  
      error=>{console.log(error),
        this.message="userName does not exist! enter correct userName."
        this.status=false}
    )
  }
  submitPass()
  {
    console.log(this.userId);
    this.userService.saveProfileService(this.userId,this.user).subscribe(
      data=>{console.log(data),
      alert("Password Updated Successfully");
    this.route.navigate(['/login'])},
      error=>console.log(error)
    )
  }
}
