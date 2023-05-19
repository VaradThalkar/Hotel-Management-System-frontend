import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }
  public getHotelList():Observable<Hotel[]>
  {
    return this.http.get<Hotel[]>('http://localhost:8089/api/hotels')
  }
  public createHotelService(hotel:Hotel):Observable<Object>
  {
return this.http.post<any>('http://localhost:8089/api/hotels',hotel)
  }
  public getHotelListService():Observable<Hotel[]>
  {
    return this.http.get<Hotel[]>('http://localhost:8089/api/hotels')
  }
  
public getHotelByIdService(id:number):Observable<Hotel>
{
  return this.http.get<Hotel>(`http://localhost:8089/hotels/id/${id}`);
}
public updateHotelService(id:number,hotel:Hotel):Observable<any>
{
  return this.http.put(`http://localhost:8089/api/hotels/${id}`,hotel);
}
public deleteHotelService(id:number):Observable<any>
{
  return this.http.delete(`http://localhost:8089/api/hotels/${id}`);
}
}
