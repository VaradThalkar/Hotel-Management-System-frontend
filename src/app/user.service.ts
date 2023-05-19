import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName:any;
  private urlName="http://localhost:8089/api/users/byName"
  private urlSave="http://localhost:8089/api/users"
  constructor(private httpClient:HttpClient) { }
  public userSignUp(user: User): Observable<any> {
    return this.httpClient.post('http://localhost:8089/api/register',user);
  }
  public userLoginService(user:User):Observable<any>
  {
    return this.httpClient.post<any>("http://localhost:8089/api/login",user)
  }
  public getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:8089/api/users');
  }
  public saveProfileService(userId:number,user:User):Observable<any>
  {
    console.log(userId);
    console.log(user);
    return this.httpClient.put<any>(`${this.urlSave}/${userId}`,user)
  }
  public getUserById(userId:number):Observable<User>
  {
    return this.httpClient.get<User>(`${this.urlSave}/${userId}`);
  }
  public getUserByUserName(user:User):Observable<any>
  {
    this.userName=user.userName;
    console.log(this.userName);
    return this.httpClient.get<any>(`${this.urlName}/${this.userName}`);
  }
}