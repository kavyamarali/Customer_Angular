import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
addCustomer:any;
data:any;
addData:any;
Customer_Id:any;
responseData:any;
  ID: any;
  constructor(private myservice:ServiceService,private router:Router,private aR:ActivatedRoute) { }

  ngOnInit(): void {
    this.addCustomer=new FormGroup(
      {
         First_Name:new FormControl(),
         Last_Name:new FormControl(),
         Country:new FormControl()
        
      } );
    
    this.ID=this.aR.snapshot.paramMap.get("Customer_Id");
    this.myservice.updateEmployeeFetch(this.ID).subscribe((r:any)=>{
      this.responseData = r;
     
       
      this.addCustomer.controls['First_Name'].setValue(this.responseData?.first_Name);
    //  this.employeeAdd.controls['Id'].setValue(this.responseData?.name);
      this.addCustomer.controls['Last_Name'].setValue(this.responseData?.last_Name);
      this.addCustomer.controls['Country'].setValue(this.responseData?.country);
    
      

    });
   
    
//this.employeeAdd.get("firstname").setValue("", { emitEvent: false });
  }
  onSubmit()
  {
    this.data=this.addCustomer.value;
   this.data.Customer_Id=this.ID;
    this.myservice.updateNewData(this.data).subscribe((r:any)=>{this.addData;});
    this.router.navigate(['/dashboard']);
  }
  
  get First_Name()
{
  return this.addCustomer.get('First_Name');
}
get Last_Name()
{
  return this.addCustomer.get('Last_Name');
}
get Country()
{
  return this.addCustomer.get('Country');
}


    
    }


interface resultData{
  first_Name:string;
  last_Name:string;
 country: string;
 
}
