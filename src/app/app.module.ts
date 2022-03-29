import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { OutComponent } from './out/out.component';
// import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProductComponent,
    HomeComponent,
    OutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [HttpClientModule, CourseGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
