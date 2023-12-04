import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TodosQuery} from "../../../session/state/session.query";
import {TodosService} from "../../../session/state/session.service";
import {TaskBoardService} from "../../state/task-board.service";
import {TaskBoardQuery} from "../../state/task-board.query";
import {FormGroup} from "@angular/forms";
import {tap} from "rxjs";
import { Task } from '../../state/task-board.model';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  qwe$ =  this.tbQ.selectItems$;

  ngOnInit() {


    // this.carService.getProductsSmall().then(products => {
    //   this.sourceProducts = products;
    //   this.cdr.markForCheck();
    // });
    // this.targetProducts = [];
    this.tbQ.selectItems$.pipe(
        tap( (data) => {
          console.log(data)
          this.newMap =  data;
        })
    ).subscribe();
  }

  // test = ['red', 'green', 'white', 'yellow','blue'];
  newMap:Task[] = [];
  todo:Task[] = [];
  doing:Task[] = [];
  done:Task[] = [];

  // todo = new Map([]);

  // doing = new Set([]);
  // done = new Set([]);

  droped = new Set([]);

  dragedTask = null;
  dragedList: any = [];
  formGroup!: FormGroup;
  value!: string;
  constructor( private tbQ: TaskBoardQuery) {
    // this.test.map( (item, ind) => {
    //   this.newMap.add(item)
    // })
  }

  dragStart(ev: any) {
    this.dragedTask = ev.e;
    this.dragedList = ev.c;
  }

  dragEnd(ev:any) {
    if (!this.dragedTask) {
      const index = this.dragedList.indexOf(ev.e);
     this.dragedList.splice(index, 1);
    }
  }
  drop(ev:any ) {
    console.log('drop task board', ev)
    if (this.dragedTask) {
      ev.panelItems.push(this.dragedTask);
      this.dragedTask = null;
    }
  }
}
