import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit{
userId:any;
reservationId:any;
dateDefault=new Date('2000-01-01');
reservation=new Reservation(0,0,this.dateDefault,this.dateDefault,0,true,0,0);
constructor(private reservationService:ReservationService,private activatedRoute:ActivatedRoute,private route:Router ){}
ngOnInit(): void {
  this.reservationId=this.activatedRoute.snapshot.params["reservationId"];
  this.reservationService.getReservationByReservationId(this.reservationId).subscribe(data=>{
    console.log(data);
    this.reservation=data;
    this.userId=this.reservation.userId;
  })
}
updateReservation(reservation:Reservation){
  console.log(reservation)
  this.reservationService.updateReservationService(this.reservationId,reservation).subscribe( data =>{
    console.log(data);
    alert("updated successfully")
    this.goToReservationList();
  },
  error => console.log(error));
}
goToReservationList(){
  this.route.navigate(['/viewReservations',{userId:this.userId}]);
}
logOut()
{
this.route.navigate(['/welcomepage'])
}
}
