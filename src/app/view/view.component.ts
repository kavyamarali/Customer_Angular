import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  result: any;
  Id:any;
  
  constructor(private myservice:ServiceService,private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
  this.Id=this.ar.snapshot.params['id'];
    this.myservice.viewcustomerServicebyId(this.Id).subscribe((r:any)=>{this.result=r;});
  }

  backtoView()
  {
    this.router.navigate(['/dashboard']);
  }

}