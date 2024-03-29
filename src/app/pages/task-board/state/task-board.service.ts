import {Injectable} from '@angular/core';
import {TaskBoardStore} from './task-board.store';
import {Task, TaskList} from "./task-board.model";
import {ID} from "@datorama/akita";
import {TaskBoardQuery} from "./task-board.query";

@Injectable({ providedIn: 'root' })
export class TaskBoardService {

  private defaultPanelId!: ID;

  constructor(
      private query: TaskBoardQuery,
      private taskBoardStore: TaskBoardStore) {}

  addList(taskList: TaskList) {
    this.taskBoardStore.add(taskList)
    if (taskList?.name === 'newTaskList') {
      this.defaultPanelId = taskList.id;
    }
  }

  removeAll() {
    this.taskBoardStore.remove();
  }

  selectList(id?: ID) {
    if (id) {
      this.taskBoardStore.setActive(id);
    } else {
      this.taskBoardStore.setActive(this.defaultPanelId);
    }
  }

  addTaskInList(task: Task) {
    this.taskBoardStore.updateActive( (state) => {
      return {
        ...state,
        items: [...state.items, task]
      }
    })
  }

  removeTaskInList(task: Task) {
    this.taskBoardStore.updateActive( (state) => {
      let filteredTasks = state.items.filter( (stateTask) => task.id !== stateTask.id);
      return {
        ...state,
        items: [...filteredTasks]
      }
    })
  }

}
