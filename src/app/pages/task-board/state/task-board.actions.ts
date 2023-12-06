import {createAction, props} from "@datorama/akita-ng-effects";
import {Task, TaskList} from "./task-board.model";
import {ID} from "@datorama/akita";

export const loadTaskBoard = createAction('[TaskBoard] Load');
export const initTaskList = createAction(
    '[TaskBoard] Init Store',
    props< {taskList: TaskList}>()
);

export const initTaskBoardPanels = createAction(
    '[TaskBoard] Init Store',
    props< {names: string[]}>()
);

export const createTask = createAction(
    '[TaskBoard] Create Task',
    props<Task>()
);

export const dragStart = createAction(
    '[TaskBoard] Start Drag Task',
    props<{task: Task, panelId: ID}>()
);

export const dragEnd = createAction(
    '[TaskBoard] End Drag Task',
    // props<{containerName: string}>()
);

export const dropTask = createAction(
    '[TaskBoard] Drop Task',
    props<{panelId: ID}>()
);