import {Component, Input, OnInit} from '@angular/core';
import {Actions} from "@datorama/akita-ng-effects";
import {ID} from "@datorama/akita";

import {dragEnd, dragStart, dropTask} from "../../state/task-board.actions";
import {Task, TaskList} from "../../state/task-board.model";

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.scss']
})
export class TaskPanelComponent implements OnInit {

  @Input() panel!: TaskList;

  constructor(private actions: Actions) {}

  ngOnInit() {}

  dragStart( task: Task, panelId: ID) {
    this.actions.dispatch(dragStart({task, panelId}))
  }

  dragEnd(panel: any) {
    this.actions.dispatch(dragEnd())
  }

  drop(panelId: ID) {
    this.actions.dispatch(dropTask({panelId}))
  }
}
