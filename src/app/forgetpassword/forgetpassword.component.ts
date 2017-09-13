import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
  providers :[DataService, MessageService]
})
export class ForgetpasswordComponent implements OnInit {
  msgs: Message[] = [];
   email;
   text;
  constructor(private dataservice : DataService, private messageService: MessageService) { }

  ngOnInit() {
  }
  forget(email)
  {
    this.email =email;
    console.log(this.email);
    let mydata;
    this.dataservice.forgetPassword(email).subscribe(
      (data)=>{
        mydata = JSON.parse(data.text());
        if(mydata.statusCode == 200)
          {
            this.msgs = [];
            this.msgs.push({severity:'success',  detail:'Reset link has been send to your Email'});
          }
      }
    )
  }
}
