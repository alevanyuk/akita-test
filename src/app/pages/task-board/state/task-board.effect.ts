import {Actions, Effect, ofType} from '@datorama/akita-ng-effects';
import {Injectable} from "@angular/core";
import {TaskBoardService} from "./task-board.service";
import {map} from "rxjs";
import {createTask} from "./task-board.actions";
import {TaskBoardStore} from "./task-board.store";
import {createNewTask} from "./task-board.model";

@Injectable()
export class TaskBoardEffect {
    constructor(
        private actions$: Actions,
        private tbS: TaskBoardService,
        private store: TaskBoardStore
        // private navigationService: NavigationService,
    ) {}

    // createTask$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(loadMainNavigation),
    //         switchMap((_) =>
    //             this.tbS.add().pipe(
    //                 map((mainNav) => loadMainNavigationSuccess({ mainNav }))
    //             )
    //         )
    //     ), { dispatch: true }
    // );

    // Or use the decorator
    @Effect()
    createTask$Success$ = this.actions$.pipe(
        ofType(createTask),
        map((task) => this.tbS.add( createNewTask(task)))
    );
}