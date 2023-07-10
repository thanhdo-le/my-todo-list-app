import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input  class="todo-input"
            #inputElementRef
            [value]="title"
            (keyup.enter)="submitValue(getInputValue($event))">
    <button class="btn btn-primary todo-button" (click)="submitValue(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})


export class InputButtonUnitComponent implements OnInit {
  title = "";

  constructor(){}

  ngOnInit(): void {
  }

  submitValue(newTitle:string) :void{
    this.submit.emit(newTitle);
  }

  getInputValue(event:Event){
    return (event.target as HTMLInputElement).value;
  }

  @Output() submit:EventEmitter<string> = new EventEmitter<string>();
}
