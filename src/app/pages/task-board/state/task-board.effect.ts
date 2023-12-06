import {Actions, createEffect, Effect, ofType} from '@datorama/akita-ng-effects';
import {Injectable} from "@angular/core";
import {map} from "rxjs";

import {TaskBoardService} from "./task-board.service";
import {createTask, dragEnd, dragStart, dropTask, initTaskBoardPanels, initTaskList} from "./task-board.actions";
import {TaskBoardStore} from "./task-board.store";
import {createNewTask, createNewTaskList} from "./task-board.model";
import {DragDropService} from "../services/drag-drop.service";

@Injectable()
export class TaskBoardEffect {
    constructor(
        private actions$: Actions,
        private tbS: TaskBoardService,
        private store: TaskBoardStore,
        private dragDropService: DragDropService
    ) {
    }

    initTaskBoardPanels$ = createEffect(() =>
        this.actions$.pipe(
            ofType(initTaskBoardPanels),
            map((value) => {
                value.names.map((name) => {
                    this.tbS.addList(createNewTaskList(name));
                })
            })
        )
    )

    initTaskList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(initTaskList),
            map((value) => {
                this.tbS.addList(value.taskList);
            })
        )
    )


    @Effect()
    createTask$ = this.actions$.pipe(
        ofType(createTask),
        map(({type, ...task}) => {
            this.tbS.selectList();
            this.tbS.addTaskInList(createNewTask(task))
        })
    );

    @Effect()
    dragStart$ = this.actions$.pipe(
        ofType(dragStart),
        map((value) => {
                this.dragDropService.dragStart(value.task, value.panelId)
            }
        ));

    @Effect()
    dragEnd$ = this.actions$.pipe(
        ofType(dragEnd),
        map(() => this.dragDropService.dragEnd()
        ));

    @Effect()
    dropTask$ = this.actions$.pipe(
        ofType(dropTask),
        map((value) => this.dragDropService.drop(value.panelId),
        ));
}