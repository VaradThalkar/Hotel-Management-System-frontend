import { Component, NgModule, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  hotels:any=[];
  hotel:any;
  userId: any;
  hotelId: any;
  price:any;
  filteredData:any;
  searchField="";
  constructor(private hotelService:HotelService,private route:Router,private activatedRoute:ActivatedRoute) { 
  }
  applyFilter(filterValue: string) {
    this.hotels.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.userId=this.activatedRoute.snapshot.paramMap.get("userId");
    console.log(this.userId);
    this.getHotelList();
  }
  getHotelList()
  {
    this.hotelService.getHotelList().subscribe(data => {this.hotels = data;
      this.filteredData=this.hotels;
  });
  }
  searchbar(){
    this.filteredData=this.hotels.filter((hotel:any)=>{
      if(hotel.hotelName.toLowerCase().includes(this.searchField.toLowerCase())){
        return hotel;
      }
      return null;
    });
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
    this.route.navigate(['/welcomepage'])
  }
  reservationDetails ()
  {
    this.route.navigate(['/viewReservations',{userId:this.userId}])
  }
  contactUs()
  {
    this.route.navigate(['/contactUs'])
  }
  bookReservation(hotelId:number,price:number){
    //this.price=price;
    console.log(price);
    //this.route.navigate(['/createReservation',{hotelId1:hotelId},{userId:this.userId}]);
    this.route.navigate(["/createReservation",hotelId,price,this.userId]);
  }
}

