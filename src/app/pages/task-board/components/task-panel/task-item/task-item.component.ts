import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../../state/task-board.model";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;

  ngOnInit() {
    console.log(this.task)
  }


}
