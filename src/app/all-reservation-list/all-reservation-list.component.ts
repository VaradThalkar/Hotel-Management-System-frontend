import { Component } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-reservation-list',
  templateUrl: './all-reservation-list.component.html',
  styleUrls: ['./all-reservation-list.component.css']
})
export class AllReservationListComponent {
  userId: any;
  reservations:any=[];
  constructor(private reservationService:ReservationService,private activatedRoute:ActivatedRoute,private route:Router){}
  ngOnInit(): void {
    this.getReservationList();
  }
  getReservationList()
  {
    this.reservationService.getAllReservation().subscribe(data => {this.reservations = data;});
  }
  logOut()
  {
    this.route.navigate(['/welcomepage'])
  }
  back()
  {
    this.route.navigate(['/adminPage'])
  }
  viewReceipt(userId:number,paymentId:number){
    this.route.navigate(['/paymentreceipt',userId,paymentId])
  }
}
