import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  url="https://localhost:7203/api/api";
 
  constructor(private httpClient:HttpClient) { }
  displayEmployeeList(){
    return this.httpClient.get(this.url);
  }
  deleteCustomer(Customer_Id:any){
  
    return this.httpClient.delete(this.url+"/"+Customer_Id);
    }
    addCustomer(v:any){
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Authorization': '',
    };
      return this.httpClient.post(this.url+"/register",v,{headers}) 
    }
    updateEmployeeFetch(Customer_Id:any){
      return this.httpClient.get(this.url+"/"+Customer_Id);
    }
    updateNewData(e:any){
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Authorization': '',
    };
      return this.httpClient.put(this.url,e,{headers}) ;
  
    
    }
    
viewcustomerServicebyId(id:number)
{
 return this.httpClient.get(this.url+"/"+id);
}

}




