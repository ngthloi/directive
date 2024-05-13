import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-redtext',
  templateUrl: './redtext.component.html',
  styleUrl: './redtext.component.css'
})
export class RedtextComponent {
  @Input() 
  id: string | undefined; 
  @Output() childEvent = new EventEmitter<String>();

  hanhdong(){
    console.log('Clicked');
    this.childEvent.emit('Con say hi');
  }
}
