import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { ServiceService } from '../servicio/servicioLogin/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formG: FormGroup;
  user: User = new User();

  constructor(
    private formB: FormBuilder, 
    private serviceService: ServiceService) { }

  ngOnInit() 
  {
    this.buildForm();
  }

  buildForm() //esto es el metodo que llama a las variables
  {
    this.formG = this.formB.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      userName: [null, Validators.required],
      pws: [null, Validators.required],
    });
  }
  saveUser() 
  {
    this.user.name = this.formG.get('name').value;
    this.user.lastName = this.formG.get('lastName').value;
    this.user.userName = this.formG.get('userName').value;
    this.user.pws = this.formG.get('pws').value;

    this.serviceService.save(this.user).subscribe(
      data => 
      {
        console.log('Se guardo el usuario', data);
      },
      error => 
      {
        console.log('Error guardando el usuario', error);
      }
    );
  }
}
