import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import * as jwt_decode from 'jsonwebtoken';
import {JwtHelperService} from '@auth0/angular-jwt'
// import { TokenApiModel } from 'src/Models/token-api.model';
import { tap } from 'rxjs';

import { Router } from '@angular/router';
import { payload } from '../Models/payload';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  payload!:payload
  token:any
  private baseUrl:string="https://localhost:7270/api/User/";
  role: any;
  username: any;
  constructor(private http:HttpClient,private router:Router) { 
    // this.payload=this.decodeToken(this.token)
  }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj)
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj).pipe(tap(response=>{
      this.token=response.token
      this.payload=this.decodeToken(this.token)
      this.username=this.payload['username']
      console.log(this.username);
      
      this.role=this.payload['role']
      console.log(this.payload);
      
    }))
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  decodeToken(token: string): any {
    const jwtHelper=new JwtHelperService();
    return (jwtHelper.decodeToken(token));
    
  }
}
