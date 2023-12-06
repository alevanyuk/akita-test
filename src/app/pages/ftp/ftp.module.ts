import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LetModule} from "@ngrx/component";
import {ProgressSpinnerModule} from "primeng/progressspinner";

import {FtpComponent} from './ftp.component';
import {FtpRoutingModule} from "./ftp-routing.module";

@NgModule({
  declarations: [
    FtpComponent

  ],
    imports: [
        CommonModule,
        FtpRoutingModule,
        LetModule,
        ProgressSpinnerModule
    ]
})
export class FtpModule { }
