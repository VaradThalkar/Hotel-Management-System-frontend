import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }
  public createReservationService(reservation:Reservation):Observable<Object>
  {
return this.http.post<any>(`http://localhost:8089/reservations/${reservation.userId}`,reservation)
  }
  public getReservationListByHotelId(hotelId:number):Observable<Reservation>{
    return this.http.get<Reservation>(`http://localhost:8089/reservations/hotel/${hotelId}`);
  }
  public getReservationListByUserId(userId:number):Observable<Reservation>{
    return this.http.get<Reservation>(`http://localhost:8089/reservations/user/${userId}`);
  }
  public getReservationByReservationId(reservationId:number):Observable<Reservation>{
    return this.http.get<Reservation>(`http://localhost:8089/api/reservations/${reservationId}`);
  }
  public updateReservationService(reservationId:Number,reservation:Reservation):Observable<any>{
    return this.http.put(`http://localhost:8089/api/reservations/${reservationId}`,reservation);
  }
  public deleteReservationService(reservationId:Number):Observable<any>{
    return this.http.delete(`http://localhost:8089/api/reservations/${reservationId}`);
  }
  public getAllReservation():Observable<Reservation>{
    return this.http.get<Reservation>(`http://localhost:8089/api/reservations`);
  }
}
