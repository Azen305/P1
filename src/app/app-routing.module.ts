import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'main/mdetails',pathMatch:'full'},
  { path: 'student', loadChildren: () => import('./container/student/student.module').then(m => m.StudentModule) }, 
  { path: 'college', loadChildren: () => import('./container/college/college.module').then(m => m.CollegeModule) }, 
  { path: 'main', loadChildren: () => import('./container/main/main.module').then(m => m.MainModule) },
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
