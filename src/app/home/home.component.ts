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
  options: Object;


  date: DateModel;

   array ;
   settings = {
    columns: {
      _id: {
        title: 'ID'
      },
      gymName: {
        title: 'gymName'
      },
      gymAdminemail: {
        title: 'gymAdminemail'
      }
    }
  };
  constructor(private dataService : DataService) { 
    this.options = new DatePickerOptions();
    this.options = {
      title : { text : 'simple chart' },
      series: [{
          data: [29.9, 71.5, 106.4, 129.2],
      }]
  };
  }

  
  ngOnInit() {
   
    this.dataService.fetchData().subscribe(
      (data)=> {
        this.array = data.result.gym_data;
        
      console.log(data.result.gym_data,"dattata---------------------")}
      )
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