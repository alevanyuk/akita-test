import {Injectable} from '@angular/core';
import {ActiveState, EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {createNewTaskList, Task, TaskList} from './task-board.model';

export interface TaskBoardState extends EntityState<TaskList>, ActiveState {
  // newTaskList: Task[],
  // todoTaskList: Task[],
  // doingTaskList: Task[],
  // doneTaskList: Task[]
}

const initialState = {

  // newTaskList: [],
  // todoTaskList: [],
  // doingTaskList: [],
  // doneTaskList: []
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tasks' })
export class TaskBoardStore extends EntityStore<TaskBoardState, TaskList> {
  constructor() {

    super(initialState);
  }

}
