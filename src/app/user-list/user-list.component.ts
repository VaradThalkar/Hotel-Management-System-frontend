import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:any=[];
  constructor(private userService: UserService,private route:Router){}
  ngOnInit(): void{
    this.getUsers();
  }
  private getUsers(){
    this.userService.getUserList().subscribe(data=>{
      this.users=data;
    });
  }
  logOut()
        {
          this.route.navigate(['/welcomepage'])
        }
}
