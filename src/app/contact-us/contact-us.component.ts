import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
logOut()
{
  this.route.navigate(['/welcomepage'])
}
back(){
  this.route.navigate(['/welcomepage']);
}
}
