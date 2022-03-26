import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SdetailsComponent } from './sdetails/sdetails.component';

const routes: Routes = [{ path: 'sdetails', component: SdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
