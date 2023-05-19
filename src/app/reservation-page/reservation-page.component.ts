import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {
dateDefault=new Date('2000-01-01');
reservation=new Reservation(0,0,this.dateDefault,this.dateDefault,0,true,0,0);
reservation1:any;
userId:any;
hotelId:any;
price:any;
nights:any=1;
constructor(private reservationService:ReservationService,private activatedRoute:ActivatedRoute,private route:Router){

}
ngOnInit(): void {
  this.hotelId=this.activatedRoute.snapshot.params["hotelId"];
  this.price=this.activatedRoute.snapshot.params["price"];
  this.userId=this.activatedRoute.snapshot.params["userId"];
  this.reservation.hotelId=this.hotelId;
  this.reservation.price=this.price;
  this.reservation.userId=this.userId;
  console.log(this.price);
  console.log(this.userId);
  console.log("Date"+this.getDateDiff(this.reservation.checkIn,this.reservation.checkOut));
    
    console.log(this.nights)
    console.log(this.reservation.price)
  }
  getDateDiff(sDate: Date,eDate: Date)
  {
    var startDate=new Date(sDate);
    var endDate=new Date(eDate);
    var Time=endDate.getTime()-startDate.getTime();
    return Time / (1000*3600*24);
  }

saveReservation(reservation:Reservation){
  console.log(reservation)
  this.nights=this.nights+this.getDateDiff(this.reservation.checkIn,this.reservation.checkOut);
  reservation.price=(this.nights)*(this.price);
  this.reservationService.createReservationService(reservation,).subscribe( data =>{
    console.log(data);
    alert("added successfully")
    this.reservation1=data;
    this.goToPayment();
  },
  error => console.log(error));
}
goToPayment(){
  this.route.navigate(['/goToPayment',this.hotelId,this.userId,this.reservation1.reservationId]);
}
logOut()
{
this.route.navigate(['/welcomepage'])
}
}
