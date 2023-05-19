import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';
import { User } from './user';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  public getPaymentByHotelIdService(hotelId:number,):Observable<Hotel>
  {
    return this.http.get<Hotel>(`http://localhost:8089/payment/payment/Hotel/${hotelId}`);
  }

  public getPaymentByUserIdService(userId:number):Observable<User>
  {
    return this.http.get<User>(`http://localhost:8089/payment/user/${userId}`);
  }

  public addPaymentService(userId:number,hotelId:number,reservationId:number,payment:Payment):Observable<Payment>
  {
    return this.http.post<Payment>(`http://localhost:8089/payment/${userId}/${hotelId}/${reservationId}`,payment);
  }
  public getAllPaymentsService():Observable<Payment[]>
  {
    return this.http.get<Payment[]>("http://localhost:8089/allPayments");
  }
  public getPaymentDetailsService(paymentId:number):Observable<Payment>
  {
    return this.http.get<Payment>(`http://localhost:8089/paymentById/${paymentId}`);
  }
  public deletePaymentService(payementId:number):Observable<boolean>
  {
    return this.http.get<boolean>(`http://localhost:8089/payment/delete/${payementId}`);
  }
}
