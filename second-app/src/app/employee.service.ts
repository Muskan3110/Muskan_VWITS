import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //service contains business logic i.e. fetching and posting data from api
  private apiUrl='https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }

  getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl)
  }
  
  addEmployee(employee: Employee) :Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl,employee)
  }

  updateEmployee(id:number,employee: Employee) : Observable<Employee>{
    return this.http.put<Employee>(`${this.apiUrl}/${id}`,employee)
  }

  deleteEmployee(id:number) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
