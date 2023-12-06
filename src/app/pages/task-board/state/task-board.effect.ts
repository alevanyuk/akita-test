import {Actions, createEffect, Effect, ofType} from '@datorama/akita-ng-effects';
import {Injectable} from "@angular/core";
import {TaskBoardService} from "./task-board.service";
import {map} from "rxjs";
import {createTask, dragEnd, dragStart, dropTask, initTaskBoardPanels, initTaskList} from "./task-board.actions";
import {TaskBoardStore} from "./task-board.store";
import {createNewTask, createNewTaskList, Task} from "./task-board.model";
import {DragDropService} from "../services/drag-drop.service";

@Injectable()
export class TaskBoardEffect {
    constructor(
        private actions$: Actions,
        private tbS: TaskBoardService,
        private store: TaskBoardStore,
        private dragDropService: DragDropService
    ) {}

    initTaskBoardPanels$ = createEffect( () =>
        this.actions$.pipe(
            ofType(initTaskBoardPanels),
            map( (value, index) => {
                value.names.map( (name) => {
                    this.tbS.addList(createNewTaskList(name));
                })
            })
        )
    )

    initTaskList$ = createEffect( () =>
        this.actions$.pipe(
            ofType(initTaskList),
            map( (value, index) => {
                this.tbS.addList(value.taskList);
            })
        )
    )


    // Or use the decorator
    @Effect()
    createTask$ = this.actions$.pipe(
        ofType(createTask),
        map(({type, ...task} ) => {
            this.tbS.selectList();
            this.tbS.addTaskInList(createNewTask(task))
        })

    );

    @Effect()
    dragStart$ = this.actions$.pipe(
        ofType(dragStart),
        map((value, index) => {
            console.log(value)
            this.dragDropService.dragStart(value.task, value.panelId)
        }
    ));

    @Effect()
    dragEnd$ = this.actions$.pipe(
        ofType(dragEnd),
        map((value, index) => this.dragDropService.dragEnd()
        ));

    @Effect()
    dropTask$ = this.actions$.pipe(
        ofType(dropTask),
        map((value, index) => this.dragDropService.drop(value.panelId),
        ));
}