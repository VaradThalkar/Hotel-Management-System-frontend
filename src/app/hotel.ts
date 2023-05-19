export class Hotel {
    hotelName: String;
    address: String;
    numberOfRooms: number;
    price: number;
    constructor(hotelName:String,address:String,numberOfRooms:number,price:number){
        this.hotelName=hotelName;
        this.address=address;
        this.numberOfRooms=numberOfRooms;
        this.price=price;
    }
}
