import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
    <input type="checkbox"
           class="todo-checkbox"
           (click)="completeItem()"
           [checked]="item.completed"
    />

    <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
      {{ item.title }}
    </span>

    <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  @Input() item: TodoItem;

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  removeItem(): void {
    this.remove.emit(this.item);
  }

  completeItem(): void{
    this.update.emit({
      item: this.item,
      changes: { completed: ! this.item.completed}
    })
  }
}
