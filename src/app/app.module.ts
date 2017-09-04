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
import {CalendarModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    CalendarModule,
    AutoCompleteModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
