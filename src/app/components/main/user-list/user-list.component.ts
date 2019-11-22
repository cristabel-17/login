import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servicio/servicioLogin/service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  data;
  
  constructor(
    private serviceService = ServiceService
  ) { }

  ngOnInit() 
  {
    this.serviceService.getUser().subscribe(
      (data) =>
      {
        console.log(data);
        this.data = data;
      })
  }

}
