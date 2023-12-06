import {Component, OnInit} from '@angular/core';
import {Actions} from "@datorama/akita-ng-effects";

import {TaskBoardQuery} from "../../state/task-board.query";
import {initTaskBoardPanels} from "../../state/task-board.actions";

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  list$ = this.taskBoardQuery.lists$;

  constructor( private actions: Actions, private taskBoardQuery: TaskBoardQuery) {}
  ngOnInit() {
    this.actions.dispatch(initTaskBoardPanels({names: ['newTaskList', 'todoTaskList', 'doingTaskList', 'doneTaskList']}));
  }
}
