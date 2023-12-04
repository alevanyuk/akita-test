import {createAction, props} from "@datorama/akita-ng-effects";
import {Task} from "./task-board.model";

export const loadTaskBoard = createAction('[TaskBoard] Load');

export const createTask = createAction(
    '[TaskBoard] Create Task',
    props<Task>()
);