import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';
import { Router } from "@angular/router";
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService, MessageService]
})
export class DirectoryComponent implements OnInit {
  msgs: Message[] = [];
  mydata : object;
  constructor(private dataService : DataService, private router : Router, private messageService: MessageService) { }

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
            // this.msgs = [];
            // this.msgs.push({severity:'success', summary:'Success Message', detail:'Invalid credentails'});
            this.router.navigate(['home']);
          }
          else{
            this.msgs = [];
            this.msgs.push({severity:'error', summary:'Error Message', detail:'Invalid credentails'});
            console.log(this.msgs);
          }
      }
    )
  }
}

