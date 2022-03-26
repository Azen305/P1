import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdetailsComponent } from './mdetails/mdetails.component';

const routes: Routes = [{ path: 'mdetails', component: MdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
