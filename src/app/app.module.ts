import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutingModule } from './app.routes';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectoryComponent } from './directory/directory.component';
import 'rxjs/add/operator/map';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DatePickerModule } from 'ng2-datepicker';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    DatePickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5JMO58ooq9YNuYQO1x4pg3TgA6zYSJ2Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
