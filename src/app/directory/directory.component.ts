import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService]
})
export class DirectoryComponent implements OnInit {

  mydata : object;
  constructor(private dataService : DataService, private router : Router) { }

  ngOnInit() {

  }
  
   checkLogin(email,password)
  {
    let mydata;
    this.dataService.login(email,password).subscribe(
      (data)=>
      {
        mydata = JSON.parse(data.text());
        console.log(mydata)
        console.log(mydata.statusCode)
        if(mydata.statusCode ==200)
          {
            this.router.navigate(['home']);
          }
      }
    )
  }
}

