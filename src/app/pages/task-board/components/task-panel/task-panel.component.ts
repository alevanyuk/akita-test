import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.scss']
})
export class TaskPanelComponent {

  @Input() panelName!: string;
  @Input() panelItems!: any;

  @Output() dragStartEvent = new EventEmitter<any>();
  @Output() dragEndEvent = new EventEmitter<any>();
  @Output() dropEvent = new EventEmitter<any>();

  // dragedColor = null;
  // dragedList = new Set();
  //
  // newMap = new Set();
  //
  // todo = new Set([]);
  //
  // doing = new Set([]);
  //
  // done = new Set([]);
  //
  // droped = new Set([]);

  dragStart( e: any, c:any) {
    console.log('dragStart task panel')
    this.dragStartEvent.emit({e, c})
    // this.dragedColor = c;
    // this.dragedList = d;
  }

  dragEnd(e:any) {
    console.log('dragEnd task panel')
    this.dragEndEvent.emit({e})
    // this.dragedList.delete(c);
    // if (!this.dragedColor) {
    //   this.dragedList.delete(c);
    //   // this.dragedList.clear();
    //   // this.dragedColor = null;
    // }
  }

  drop(panelItems: any) {
    console.log('drop task panel')
    this.dropEvent.emit({panelItems});

  }
}
