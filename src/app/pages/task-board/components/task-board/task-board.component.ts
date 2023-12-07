import {Component, OnDestroy, OnInit} from '@angular/core';
import {Actions} from "@datorama/akita-ng-effects";

import {TaskBoardQuery} from "../../state/task-board.query";
import {initTaskBoardPanels} from "../../state/task-board.actions";
import {TaskBoardService} from "../../state/task-board.service";

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit, OnDestroy {

  list$ = this.taskBoardQuery.lists$;

  constructor( private actions: Actions, private taskBoardQuery: TaskBoardQuery, private taskBoardService: TaskBoardService) {}
  ngOnInit() {
    this.actions.dispatch(initTaskBoardPanels({names: ['newTaskList', 'todoTaskList', 'doingTaskList', 'doneTaskList']}));
  }

  ngOnDestroy() {
    this.taskBoardService.removeAll();
  }
}
