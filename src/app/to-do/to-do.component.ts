import { Component, OnInit } from '@angular/core';
import {TodoService} from './services/todo.service'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  hasTodo$: Observable<boolean>

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.fetchFromLocalStorage();
    this.hasTodo$ = this.todoService.length$.pipe(map(length => length > 0))
  }

}
