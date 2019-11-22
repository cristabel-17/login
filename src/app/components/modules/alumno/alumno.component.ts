import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit 
{
  messageValue = '';

  constructor() { }

  ngOnInit() 
  {
    this.messageValue = 'Soy tu padre'
  }

  printMessage(event: string)
  {
    console.log(event);
  }

}
