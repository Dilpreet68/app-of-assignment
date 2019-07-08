import {Component, Input, EventEmitter, Output} from '@angular/core';


@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent{

    empId:number;
    empName:string;
    empSalary:number;
    
   
    empAll:any[]=[
        {empId:1001,empName:"ABCD",empSalary:33333.11},
        {empId:1002,empName:"BCD",empSalary:33333.11},
        {empId:1003,empName:"CD",empSalary:33333.11}
    ];
    //data1:number;
    addEmployee():any{
      
        this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})
        console.log("Employee Added...."+this.empAll);
    }
    
}