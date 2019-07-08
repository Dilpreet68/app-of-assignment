import {Component, Input, EventEmitter, Output} from '@angular/core';


@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})
export class ShowEmployeeComponent{

    empId:number;
    empName:string;
    empSalary:number;
    @Input()
    child:any;
    
    

}