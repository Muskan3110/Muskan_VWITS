import { Injectable } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public empList: Array<any>=[];
  constructor() {
    this.empList=[{
      name:'Ravi Sharma',
      city:'Delhi'
     
    }]
   }

   returnEmpData(): Array<any>{
    return this.empList;
   }

   addEmpData(item:any):void{
    this.empList.push(item);
   }
}
