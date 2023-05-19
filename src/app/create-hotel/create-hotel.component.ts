import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit{
  hotel=new Hotel("","",0,0);
  placeId:any;
    constructor(private hotelService:HotelService,private router:Router,private activatedroute:ActivatedRoute) { }
  
    ngOnInit(): void {
    }
    saveHotel(){
      console.log(this.hotel)
      this.hotelService.createHotelService(this.hotel,).subscribe( data =>{
        console.log(data);
        alert("added successfully")
        this.goToHotelList();
      },
      error => console.log(error));
    }
  
    goToHotelList(){
      this.router.navigate(['/hotelList']);
    }
    
    onSubmit(){
      console.log(this.hotel);

      this.saveHotel();
    }
    logOut()
  {
    this.router.navigate(['/welcomepage'])
  }
}
