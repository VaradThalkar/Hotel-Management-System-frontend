import { Component } from '@angular/core';
import { Hotel } from '../hotel';
import { Payment } from '../payment';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { ReservationService } from '../reservation.service';
import { HotelService } from '../hotel.service';
import { Reservation } from '../reservation';
import { UserService } from '../user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  hotelId:any;
  userId:any;
  reservationId:any;
  paymentId:any;
  hotel=new Hotel("","",0,0);
  user=new User("","",0,0,"",true,"");
  nights:any;
  Price:any;
  date=new Date();
  currentYear=this.date.getUTCFullYear();
  currentMonth=this.date.getUTCMonth()+1;
  currentday=this.date.getUTCDate();
  FinalMonth:any;
  FinalDay:any;
  formattedDate:any;
  todayDate:any;
  reservation=new Reservation(0,0,this.date,this.date,0,true,0,0);
  payment=new Payment(0,0,"","","","","",0,0,this.date,this.date,"","",0,"","","");
  constructor(private activatedRout:ActivatedRoute,private paymentService:PaymentService,private userService:UserService,
              private reservationService:ReservationService,private hotelService:HotelService,
              private router:Router) 
  { } 
  ngOnInit(): void {
    if(this.currentMonth<10)
    {
      this.FinalMonth="0"+this.currentMonth;
    }else{
      this.FinalMonth=this.currentMonth;
    }
    if(this.currentday<10)
    {
      this.FinalDay="0"+this.currentday;
    }else{
      this.FinalDay=this.currentday;
    }
    this.todayDate=this.FinalMonth+"-"+this.FinalDay+"-"+this.currentYear;
    console.log("System Date"+this.todayDate)
    this.hotelId=this.activatedRout.snapshot.params["hotelId"]
    this.userId=this.activatedRout.snapshot.params["userId"]
    this.reservationId=this.activatedRout.snapshot.params["reservationId"]
    this.getHotelDetails();
    this.getUserDetails();
    this.getReservationDetails();
  }
  getHotelDetails()
  {
    this.hotelService.getHotelByIdService(this.hotelId).subscribe(
      data=>{console.log(data),
      this.hotel=data
      this.payment.hotelId=this.hotelId;
      this.payment.hotelName=this.hotel.hotelName;
      },
      error=>console.log(error)
    )
  }
  getReservationDetails()
  {
    this.reservationService.getReservationByReservationId(this.reservationId).subscribe(
      data=>{console.log(data),
      this.reservation=data,
      console.log(this.reservation.price),
      this.payment.checkIn= this.reservation.checkIn,
      this.payment.checkOut= this.reservation.checkOut,
      this.payment.price=this.reservation.price,
      console.log("total price "+this.payment.price)},
      error=>console.log(error)
    )
  }
  getUserDetails()
  {
    this.userService.getUserById(this.userId).subscribe(
    data=>{console.log(data),
    this.user=data
    this.payment.contactNumber=this.user.contactNumber,
    this.payment.userName=this.user.userName,
    this.payment.name=this.user.name},
    error=>console.log(error)
    )
  }
  addToPayment()
  {
    this.payment.paidDate=this.todayDate
    console.log(this.userId,this.hotelId,this.reservationId,this.payment);
    this.paymentService.addPaymentService(this.userId,this.hotelId,this.reservationId,this.payment).subscribe(
      data=>{console.log("payment success"),
    this.payment=data,
      alert("Payement Successfull"),
      console.log(this.payment)
      console.log(this.userId,this.payment.payementId),
      this.router.navigate(['/paymentreceipt',this.userId,this.payment.payementId])},
      //error=>console.log(error)
    )
  }
  back()
  {
    this.router.navigate(['/homePage',{userId:this.userId}])
  }
  userProfile()
  {
    this.router.navigate(['userProfile',{userId1:this.userId}])
  }
  logOut()
  {
    this.router.navigate(['/welcomepage'])
  }
  contactUs()
  {
    this.router.navigate(['/contactUs'])
  }
  cancelPayment(){
    this.reservationService.deleteReservationService(this.reservationId).subscribe(
      data=>{console.log("succuss"),
      alert("Payment Canceled"),
      this.router.navigate(['/homePage',{userId:this.userId}])},
      error=>console.log("error"),);
      this.router.navigate(['/homePage',{userId:this.userId}]);
  }
}
  