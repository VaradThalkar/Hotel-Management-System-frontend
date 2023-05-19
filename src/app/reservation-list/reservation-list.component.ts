import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit{
  userId: any;
  reservations:any=[];
  constructor(private reservationService:ReservationService,private activatedRoute:ActivatedRoute,private route:Router){}
  ngOnInit(): void {
    this.userId=this.activatedRoute.snapshot.paramMap.get("userId");
    console.log(this.userId);
    this.getReservationList();
  }
  getReservationList()
  {
    this.reservationService.getReservationListByUserId(this.userId).subscribe(data => {this.reservations = data;});
  }
  userProfile()
  {
    console.log(this.userId)
    this.route.navigate(['/userProfile',{userId1:this.userId}])
  }
  logOut()
  {
    this.route.navigate(['/welcomepage'])
  }
  back()
  {
    this.route.navigate(['/homePage',{userId:this.userId}])
  }
  reservationDetails ()
  {
    this.route.navigate(['/viewReservations',{userId:this.userId}])
  }
  contactUs()
  {
    this.route.navigate(['/contactUs'])
  }
cancelReservations(reservationId:Number){
  this.reservationService.deleteReservationService(reservationId).subscribe(
  data=>{console.log("succuss"),
  this.getReservationList()},
  error=>console.log("error"))
}
updateReservation(reservationId:Number){
  console.log(reservationId)
  this.route.navigate(['/updateReservation',{reservationId}]);
}
viewReceipt(userId:number,paymentId:number){
  this.route.navigate(['/paymentreceipt',userId,paymentId])
}
}
