import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels:any=[];
  hotel1:any=[];
  id:any;
  constructor(private hotelService:HotelService,private reservationService:ReservationService,private route:Router,private activatedRout:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getHotelList();
  }
  private getHotelList()
  {
    this.hotelService.getHotelListService().subscribe(data => {
      this.hotels = data;
      console.log(this.hotels);
  });}
  updateHotel(hotelId:number)
  {
    console.log(hotelId)
    this.route.navigate(['/updateHotel',{hotelId}]);
  }
  deleteHotel(id:number)
  {
    this.reservationService.getReservationListByHotelId(id).subscribe(data=>{
      this.hotel1=data;
    },error=>console.log("Error"));
    if(this.hotel1.length===0){
      this.hotelService.deleteHotelService(id).subscribe(
        data=>{alert("Hotel Deleted!"),
        this.getHotelList()},
        error=>console.log("error")
      );
    }else{
      alert("this hotel already have bookings!");
    }
  }
  logOut()
  {
    this.route.navigate(['/welcomepage'])
  }
  back()
  {
    this.route.navigate(['/adminPage'])
  }

}
