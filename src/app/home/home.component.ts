import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DataService]
})
export class HomeComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  send(name,password,email,phone)
  {
    this.dataService.sendData (name,password,email,phone).subscribe(
      (res)=>console.log(res)
    )
  }
}
