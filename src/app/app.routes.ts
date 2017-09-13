import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

import { RouterModule , Routes} from '@angular/router';
import { NgModule } from '@angular/core';

const routes : Routes =[
    {
        path:'home',
        component : HomeComponent
    },
    {
        path:'directory',
        component : DirectoryComponent
    },
    {
        path:'forget',
        component : ForgetpasswordComponent
    },
    {
        path:'',
        component : DirectoryComponent
    }
]

@NgModule ({
    imports :[RouterModule.forRoot (routes)],
    exports : [RouterModule]
})

export class appRoutingModule
{
    
}