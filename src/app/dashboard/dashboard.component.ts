import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
result:any;
result14:any;
msg:any;
result12:any;
data:any;
addData:any;
message:any;
closeResult: string | undefined;
addCustomer:any;
updateCustomer: any;
responseData1: any;
  Id: any;
  constructor(private myservice:ServiceService, private router:Router,private modalService: NgbModal) { 
   
  }

  ngOnInit(): void {
    this.myservice.displayEmployeeList().subscribe((r: any)=>{this.result=r;});
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
get Created_Date()
{
  return this.addCustomer.get('Created_Date');
} 


  
  deleteRecord(Customer_Id:any){
    if(window.confirm("are you sure you want to delete")){
    this.myservice.deleteCustomer(Customer_Id).subscribe((response: any)=>{
    
      this.result=response;
      if(this.result){
        window.location.reload();
      }
      else{
        this.msg='deleted';
        window.alert(this.msg);
      }
    });
    
  }
  }
  addSet(content1:any){
    this.router.navigate(['/add']);
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason1(reason)}`;
    });
  }
  private getDismissReason1(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  open(content: any,Customer_Id:any) {
    this.myservice.viewcustomerServicebyId(Customer_Id).subscribe(r=>{this.result12=r;});
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
  Seton(Customer_Id:any){
    
    this.router.navigate(['/edit',Customer_Id]);
  }

}

interface resultData{
  first_Name:string;
  last_Name:string;
 country: string;
 
}
