import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actions} from "@datorama/akita-ng-effects";
import {dragEnd, dragStart, dropTask, initTaskList} from "../../state/task-board.actions";
import {createNewTaskList, Task, TaskList} from "../../state/task-board.model";
import {ID} from "@datorama/akita";

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
    console.log('dragStart')
    console.log('task', task)
    this.actions.dispatch(dragStart({task, panelId}))
  }

  dragEnd(panel: any) {
    console.log('dragEnd', panel)
    this.actions.dispatch(dragEnd())
  }

  drop(panelId: ID) {
    console.log('drop', panelId)
    this.actions.dispatch(dropTask({panelId}))
  }
}
