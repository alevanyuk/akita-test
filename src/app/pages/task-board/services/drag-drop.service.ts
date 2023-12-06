import {Injectable} from "@angular/core";
import {ID} from "@datorama/akita";

import { Task } from "../state/task-board.model";
import {TaskBoardService} from "../state/task-board.service";

@Injectable({providedIn: 'root'})
export class DragDropService {

    private dragTask!:Task;
    private dragContainerId!: ID | null;
    private dropContainerId!: ID | null;

    constructor(private taskBoardService: TaskBoardService) {}

    dragStart(task: Task, panelId: ID) {
        this.dragTask = task;
        this.dragContainerId = panelId;
    }

    dragEnd() {
        if (this.dropContainerId && this.dragContainerId && this.dropContainerId !== this.dragContainerId) {
            this.taskBoardService.selectList(this.dropContainerId);
            this.taskBoardService.addTaskInList(this.dragTask)
            this.taskBoardService.selectList(this.dragContainerId);
            this.taskBoardService.removeTaskInList(this.dragTask)
        }
        this.dragContainerId = null;
        this.dropContainerId = null;
    }

    drop(panelId: ID) {
        this.dropContainerId = panelId;
    }
}