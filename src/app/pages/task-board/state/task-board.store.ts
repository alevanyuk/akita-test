import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Task} from './task-board.model';

export interface TaskBoardState extends EntityState<Task, number> {
  newTaskList: Task[],
  todoTaskList: Task[],
  doingTaskList: Task[],
  doneTaskList: Task[]
}

const initialState = {
  newTaskList: [],
  todoTaskList: [],
  doingTaskList: [],
  doneTaskList: []
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tasks' })
export class TaskBoardStore extends EntityStore<TaskBoardState> {
  constructor() {
    super(initialState);
  }

}
