import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {
  Date: Date=new Date();
  paymentId:any
  userId:any
  payment=new Payment(0,0,"","","","","",0,0,this.Date,this.Date,"","",0,"","","");
    constructor(private activatedRoute:ActivatedRoute,private route:Router,private payementService:PaymentService) { }
  
    ngOnInit(): void {
  this.paymentId=this.activatedRoute.snapshot.params["paymentId"]
  this.userId=this.activatedRoute.snapshot.params["userId"]
  
    this.getPaymentDetails();
    }
  getPaymentDetails()
  {
    this.payementService.getPaymentDetailsService(this.paymentId).subscribe(
      data=>{console.log(data),
      this.payment=data},
      error=>console.log(error)
    )
  }
  paymentSucess(){
    this.home();
  }
  home()
  {
    this.route.navigate(['/homePage',{userId:this.userId}])
  }
  logOut()
  {
    this.route.navigate(['/welcomepage'])
  }
  }
  