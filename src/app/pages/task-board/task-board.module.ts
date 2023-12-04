import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import {TaskBoardRoutingModule} from "./task-board-routing.module";
import {CreateTaskComponent} from "./components/create-task/create-task.component";
import {InputGroup, InputGroupModule} from 'primeng/inputgroup';
import {InputGroupAddon, InputGroupAddonModule} from 'primeng/inputgroupaddon';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import {ReactiveFormsModule} from "@angular/forms";
import {DragDropModule} from "primeng/dragdrop";
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TaskPanelComponent } from './components/task-panel/task-panel.component';
import { TaskItemComponent } from './components/task-panel/task-item/task-item.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    TaskBoardComponent,
    CreateTaskComponent,
    TaskPanelComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    TaskBoardRoutingModule,
    InputGroupModule,
    InputGroupAddonModule,
    FieldsetModule,
    ButtonModule,
    ReactiveFormsModule,
    DragDropModule,
    PanelModule,
    ScrollPanelModule,
      MatIconModule,


  ],
})
export class TaskBoardModule { }
