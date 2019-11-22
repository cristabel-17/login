import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit 
{
  @Input() message: string;
  @Output() response: EventEmitter<string> = new EventEmitter <string>();

  constructor() { }

  ngOnInit() 
  { }

  ngOnChanges(changes: SimpleChanges)
  {
    console.log('change', changes.message);
  }

  sendMessage()
  {
    this.response.emit('Soy tu hijo');
  }
}
