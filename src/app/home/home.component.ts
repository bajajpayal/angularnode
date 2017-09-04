import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DataService]
})
export class HomeComponent implements OnInit {

  // lat: number = 42.858217;
  // lng: number = -70.929990;
  // zoon:number = 10;

  // marker : marker [] = [
  //   {
  //     name : 'compant one',
  //     lat : 42.858234,
  //     lng : -70.929321,
  //     draggable : true 

  //   },
  //   {
  //     name : 'compant one',
  //     lat : 42.858238,
  //     lng : -70.929333,
  //     draggable : true 

  //   }, 
  //   {
  //     name : 'compant one',
  //     lat : 42.858245,
  //     lng : -70.929354,
  //     draggable : true 

  //   },
  // ]

  date: DateModel;
  options: DatePickerOptions;



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
  constructor(private dataService : DataService) { 
    this.options = new DatePickerOptions();
  }

  
  ngOnInit() {
   
    // this.dataService.fetchData(email,password).subscribe(
    //   (data)=>
    //   {
    //     localStorage.setItem('currentuser', JSON.stringify({name : data.result}));
    //     this.array = data.result;
    //     console.log(this.array);
    //   })

    //   this.dataService.updateData().subscribe(
    //     data=>
    //     {
    //       console.log("done")
    //     }
    //   )

    //   this.dataService.deleteData().subscribe(
    //     data=>
    //     {
    //       console.log("delete done");
    //     }
    //   )
  } 
  

  send(name,password,email,phone)
  {
    this.dataService.sendData (name,password,email,phone).subscribe(
      (res)=>console.log(res)
    )
  }
}

// interface marker  {
//   name : string,
//   lat : number , 
//   lng : number,
//   draggable : boolean
//     }