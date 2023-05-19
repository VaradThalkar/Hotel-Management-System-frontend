export class Reservation {
    ReservationId:Number;
    hotelId:Number;
    checkIn:Date;
    checkOut:Date;
    userId:Number;
    status:boolean;
    paymentId:Number;
    price:number;
    constructor(ReservationId:Number,hotelId:Number,checkIn:Date,checkOut:Date,userId:Number,status:boolean,paymentId:Number,price:number){
        this.ReservationId=ReservationId;
        this.hotelId=hotelId;
        this.checkIn=checkIn;
        this.checkOut=checkOut;
        this.userId=userId;
        this.status=status;
        this.paymentId=paymentId;
        this.price=price;
    }
    
}

