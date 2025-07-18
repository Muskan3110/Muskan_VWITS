import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee/employee.model';

@Pipe({
  name: 'employeefilter'
})
export class EmployeefilterPipe implements PipeTransform {

  transform(employees : Employee[], searchText: string): Employee[] {
  
    if(!employees || !searchText)  return employees;

    console.log(employees)
    return employees.filter(emp => 
      emp.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

}
