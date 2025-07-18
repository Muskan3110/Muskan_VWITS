import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  
  editing :boolean=false;
  editEmployee: Employee = {id:0,name:'',email:''}

  searchText :string = '' //for pipe

  startEdit(emp: Employee): void {
    this.editing = true;
    this.editEmployee = {...emp}
  }

  employees: Employee[]=[]
  newEmployee : Employee ={name:'',email:''}

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees():void{
    this.employeeService.getEmployees().subscribe(data=>{
      this.employees=data;
    })
  }
   
  createEmployee():void{
    this.employeeService.addEmployee(this.newEmployee).subscribe(employee =>{
      this.employees.push(employee);
      this.newEmployee={name:'',email:''};
    })
  }

  updateEmployee():void{
    if(!this.editEmployee.id) return

    this.employeeService.updateEmployee(this.editEmployee.id, this.editEmployee).subscribe(updated => {
      const index=this.employees.findIndex(e=>e.id===updated.id)
      if(index!==-1)
        this.employees[index]=updated;
        this.editing=false;
        this.editEmployee={id:0,name:'',email:''}
    })
  }

  deleteEmployee(id:number) :void{
    this.employeeService.deleteEmployee(id).subscribe(() =>{
      this.employees=this.employees.filter(emp=>emp.id !==id)
    })
  }
}
