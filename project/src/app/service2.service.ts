import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  url='https://login-details-67cef-default-rtdb.firebaseio.com/';
  
  
  constructor(private http:HttpClient) { }



  get(email:any,password:any){
   return this.http.get(this.url)
  }
  
  post(email:any,password:any){
    let postdata ={
      email: email,
      password: password

    }
    return this.http.post(this.url + 'posts.json',postdata)
  }




  
}
