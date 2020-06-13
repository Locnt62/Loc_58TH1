import { Component, OnInit } from '@angular/core';
import { FilterButton, Filter } from '../models/filtering.model';
import { TodoService } from '../services/todo.service';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    filterButtons : FilterButton[] = [
      {type: Filter.All, label:'All',isActive:true},
      {type: Filter.Active, label:'Active',isActive:false},
      {type: Filter.Completed, label:'Completed', isActive:false},
    ];
     length = 0;
     hasComplete$: Observable<boolean>;
     destroy$ : Subject<null> = new Subject<null>(); 
  constructor(private todoSevice: TodoService) { }

  ngOnInit() {
    this.hasComplete$ = this.todoSevice.todos$.pipe(
      map(todos =>todos.some(t=>t.isCompleted)),
      takeUntil(this.destroy$)
    );
    this.todoSevice.length$.pipe(takeUntil(this.destroy$)).subscribe(length => {
      this.length = length;
    })
  }
  filter(type: Filter){
    this.setActiveFilterBtn(type);
    this.todoSevice.filterTodos(type);
  }
  setActiveFilterBtn(type :Filter){
    this.filterButtons.forEach(btn =>{
      btn.isActive = btn.type === type;
    });
  }
  clearCompleted(){
    this.todoSevice.clearCompleted();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    
  }
}
