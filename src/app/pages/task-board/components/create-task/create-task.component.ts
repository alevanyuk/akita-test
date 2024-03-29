import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Actions} from "@datorama/akita-ng-effects";

import {TaskBoardService} from "../../state/task-board.service";
import {createTask} from '../../state/task-board.actions';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {

    createFormGroup!: FormGroup;

    constructor(private taskBoardService: TaskBoardService, private actions: Actions) {
    }

    ngOnInit() {
        this.createForm();
    }

    createTask() {
        if (this.createFormGroup.valid) {
            this.actions.dispatch(createTask(this.createFormGroup.getRawValue()))
        }
    }

    private createForm() {
        this.createFormGroup = new FormGroup({
            title: new FormControl<string | null>('', Validators.required),
            time: new FormControl<number | null>(null, Validators.required),
            priority: new FormControl<string | null>('', Validators.required),
        })
    }
}
