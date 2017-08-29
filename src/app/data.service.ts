import { Injectable } from '@angular/core';
import {Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http : Http) { }

  sendData(name,password,email,phone)
  {
    
    return this.http.post('http://localhost:8001/users/signUp',{
    name : name,
    password:password,
    email:email,
    phoneNo:phone
    })
  }

}
