import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { CEmployee } from '../CEmployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  emp: any[] = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(): void{
    this.employeesService.getEmployees().subscribe(
      (res => {
        this.emp = res;
        console.log(this.emp);
      })
    )
  }
}