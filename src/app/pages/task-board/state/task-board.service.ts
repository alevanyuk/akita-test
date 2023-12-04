import {Injectable} from '@angular/core';
import {TaskBoardStore} from './task-board.store';
import {Task} from "./task-board.model";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class TaskBoardService {

  constructor(private taskBoardStore: TaskBoardStore, private http: HttpClient) {}

  add(task: Task) {
    this.taskBoardStore.update( (state) => {
      let taskList = [...state.newTaskList, task]
      console.log(state)
      console.log(task)
      return {
      ...state,
      newTaskList: taskList
    }


    });
    // this.taskBoardStore.add(createTask(task));
  }

}
