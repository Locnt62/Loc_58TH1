import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.model';
import { trigger, state, style, transition, animate } from '@angular/animations'
const fadeStrikeThroughAnimation = trigger('fadeStrikeThrough', [
  state('active', style({

    color: 'black',
  })),
  state('completed', style({

    color: 'lightgrey',
    textDecoration: 'line-through',
  }),
  ),
  transition('active <=> completed', [animate(250)]),
])

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  animations: [fadeStrikeThroughAnimation],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  isHovered = false;
  isEditing = false;
  constructor() { }

  ngOnInit() {
  }
  changeTodoStatus() {
    this.changeStatus.emit({ ...this.todo, isCompleted: !this.todo.isCompleted });
  }
  submitEdit(event: KeyboardEvent) {
    const { keyCode } = event;
    event.preventDefault();
    if (keyCode === 13) {
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }
  }
  removeTodo() {
    this.deleteTodo.emit(this.todo)
  }
}
