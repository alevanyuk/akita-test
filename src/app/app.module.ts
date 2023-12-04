import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {HeaderComponent} from './commonUI/header/header.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {PickListModule} from "primeng/picklist";
import {SharedModule} from "primeng/api";
import {HttpClientModule} from "@angular/common/http";
import {OrderListModule} from 'primeng/orderlist';
import {DragDropModule} from 'primeng/dragdrop';
import {MatFormFieldModule} from "@angular/material/form-field";
import {InputTextModule} from "primeng/inputtext";
import {AkitaNgEffectsModule} from "@datorama/akita-ng-effects";
import {TaskBoardEffect} from "./pages/task-board/state/task-board.effect";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,

    AppRoutingModule,
    AkitaNgDevtools.forRoot(),

    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    PickListModule,
    SharedModule,
    BrowserAnimationsModule,
    PickListModule,
    HttpClientModule,
    FormsModule,
    OrderListModule,
    DragDropModule,
    MatFormFieldModule, MatInputModule,
    InputTextModule,
    // TabMenuModule,
    // PanelMenuModule
    AkitaNgEffectsModule.forRoot([TaskBoardEffect])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
