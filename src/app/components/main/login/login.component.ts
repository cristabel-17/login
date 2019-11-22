import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.models';
import { ServiceService } from '../servicio/servicioLogin/service.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  isLogin: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService,
    private authenticationService: AuthenticationService) { }
     
  ngOnInit() {localStorage.removeItem('currentUser');
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
        }
        );
      }
      onSubmit() 
      {
        this.authenticationService.login(this.user.name, this.user.pws)
        .pipe(first())
        .subscribe(
          data =>
           {
            if (data)
            {
              localStorage.setItem('userName', data.name +' '+ data.lastName) 
            }
            this.router.navigate(['../home'], {relativeTo: this.activatedRoute});
          },
        error => 
        {
          console.log('error', error);
        }
        )
      }
}
