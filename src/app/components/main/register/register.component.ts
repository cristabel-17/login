import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formG: FormGroup;

  constructor(private formB: FormBuilder) { }

  ngOnInit() 
  {
    this.buildForm();
  }

  buildForm() //esto es el metodo que llama a las variables
  {
    this.formG = this.formB.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      userName: null,
      pws: null,
    });
  }

}
