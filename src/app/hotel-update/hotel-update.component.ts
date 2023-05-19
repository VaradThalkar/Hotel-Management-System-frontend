import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-update',
  templateUrl: './hotel-update.component.html',
  styleUrls: ['./hotel-update.component.css']
})
export class HotelUpdateComponent implements OnInit {
  hotelId:any;
  hotel=new Hotel("","",0,0);
  message="";
  placeId:any;
  constructor(private activatedroute:ActivatedRoute,private hotelService:HotelService,private route:Router)
   { }

  ngOnInit(): void {
    this.hotelId=this.activatedroute.snapshot.params["hotelId"];
    this.hotelService.getHotelByIdService(this.hotelId).subscribe(
    data=>{this.hotel=data,
    console.log(data)},
    error=>console.log(error),
  )}
  updateHotel()
  {
    this.hotelService.updateHotelService(this.hotelId,this.hotel).subscribe(
      data=>{console.log(data),
        alert("updated successfully")
      this.route.navigate(['/hotelList',{hotelId:this.hotelId}])},
      error=>console.log("update failed")
    )
  }
  logOut()
  {
    this.route.navigate(['/welcomepage'])
  }
}
