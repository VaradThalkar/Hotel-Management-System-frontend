import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user:User=new User("","",0,0,"",true,"");
  userId:any;
  constructor(private userService:UserService,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.getUserDetails();
  }
  getUserDetails(){
    this.userId=this.activatedRoute.snapshot.params["userId1"]
      this.userService.getUserById(this.userId).subscribe(
        data=>{this.user=data,
        console.log(data)}
      )
  }
  saveProfile(user:User)
  {
    this.userService.saveProfileService(this.userId,user).subscribe(
      data=>{console.log(data),
      alert("Profile Updated Successfully");},
      error=>console.log(error)
      )
  }
  logOut()
  {
    this.route.navigate(['/welcomepage'])
  }
}
