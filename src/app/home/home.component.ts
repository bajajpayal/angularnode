import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DataService]
})
export class HomeComponent implements OnInit {
   array = [];
   settings = {
    columns: {
      _id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      phoneNo: {
        title: 'phoneNo'
      },
      email: {
        title: 'Email'
      }
    }
  };
  constructor(private dataService : DataService) { }

  ngOnInit() {
   
    this.dataService.fetchData().subscribe(
      (data)=>
      {
        this.array = data.result;
        console.log(this.array);
      })

      this.dataService.updateData().subscribe(
        data=>
        {
          console.log("done")
        }
      )

      this.dataService.deleteData().subscribe(
        data=>
        {
          console.log("delete done");
        }
      )
  } 

  send(name,password,email,phone)
  {
    this.dataService.sendData (name,password,email,phone).subscribe(
      (res)=>console.log(res)
    )
  }
}
