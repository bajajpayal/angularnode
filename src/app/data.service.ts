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

  fetchData ()
  {
     return this.http.get('http://localhost:8001/users/getAllUsers').map(
       (res)=>res.json()
     )
  }

  updateData ()
  {
    var body = {
      name : 'new'
    }
    return this.http.put('http://localhost:8001/users/updateUser?Id=' + '59a53d79f8319728243a42a7' , body).map(
      res=>res.json()
    );
  }

  deleteData ()
  {
    return this.http.delete('http://localhost:8001/users/deleteUserData?Id=' + '59a523ce0f54ea1ecd24fead').map(
      res=>res.json()
    )
  }
}
