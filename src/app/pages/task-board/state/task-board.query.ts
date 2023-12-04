import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TaskBoardStore, TaskBoardState } from './task-board.store';

@Injectable({ providedIn: 'root' })
export class TaskBoardQuery extends QueryEntity<TaskBoardState> {

  constructor(protected override store: TaskBoardStore) {
    super(store);
  }
   selectItems$ = this.store._select( (store) => store.newTaskList);
}