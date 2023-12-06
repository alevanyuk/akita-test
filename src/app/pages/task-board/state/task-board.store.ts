import {Injectable} from '@angular/core';
import {ActiveState, EntityState, EntityStore, StoreConfig} from '@datorama/akita';

import {TaskList} from './task-board.model';

export interface TaskBoardState extends EntityState<TaskList>, ActiveState {
}

const initialState = {
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tasks' })
export class TaskBoardStore extends EntityStore<TaskBoardState, TaskList> {
  constructor() {

    super(initialState);
  }

}
