import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.models';
import { ServiceService } from '../servicio/servicioLogin/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User('Cristabel', 'contra1234');
  isLogin: boolean = false;

  constructor(private serviceService: ServiceService) { }
     
  ngOnInit() {
  }
    setUser() 
    {
      console.log('user', this.user);
    }
    getUser()
    {
      this.serviceService.getUser().subscribe(data =>
        {
          console.log('data', data);

          if (data.find(f => f.name === this.user.name && f.pws == this.user.pws))
          {
            this.isLogin = true;
          } else 
            {
            this.isLogin = false;
            }
          console.log('isLogin: ', this.isLogin);
        },
        error => 
        {
          console.log('error', error);
        }
      );
    }
}
