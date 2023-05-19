import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    constructor(private route:Router){}
  ngOnInit(): void {
      
  }
  public userSignUp(){
    this.route.navigate(['/userSignUp'])
  }
  login()
  {
    this.route.navigate(['/login'])
  }
  contactUs()
  {
    this.route.navigate(['/contactUs'])
  }
  aboutUs()
  {
    this.route.navigate(['/aboutUs'])
  }
}
