import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';

import {TaskBoardState, TaskBoardStore} from './task-board.store';

@Injectable({providedIn: 'root'})
export class TaskBoardQuery extends QueryEntity<TaskBoardState> {

    constructor(protected override store: TaskBoardStore) {
        super(store);
    }

    lists$ = this.selectAll();
}