import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseGuardService } from './course-guard.service';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    component: EmployeeComponent, path:"employee", canActivate:[CourseGuardService]
  },{
    component: ProductComponent, path:"product", canActivate:[CourseGuardService]
  },{
    component: HomeComponent, path:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
