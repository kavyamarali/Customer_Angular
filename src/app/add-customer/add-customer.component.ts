import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
addCustomer:any;
data:any;
message:any;
  addEmployee: any;
  constructor(private myservice:ServiceService) { }

  ngOnInit(): void {
    this.addCustomer=new FormGroup(
      {
         First_Name:new FormControl(),
         Last_Name:new FormControl(),
         Country:new FormControl()
        
      }
    );
    

    }
    onSubmit(){
      this.data=this.addCustomer.value;
    this.myservice.addCustomer(this.data).subscribe((res: any)=>{if(res)
      {
        this.message="data inserted one";

      }
      else
      {
        this.message="error in data";
      }
      //this.router.navigate(['/dashboard']);
    }
)};
 
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
