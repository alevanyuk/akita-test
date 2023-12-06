import {Component} from '@angular/core';

import {FtpSettingsService} from "./store/service";
import {FtpSettingsQuery} from "./store/query";
import {Observable} from "rxjs";
import {Credentials} from "./api/ftp-settings.models";

@Component({
  selector: 'app-ftp',
  templateUrl: './ftp.component.html',
  styleUrls: ['./ftp.component.scss']
})
export class FtpComponent {

  ftpAddress$ = this.ftpQuery.selectFtpAddress();
  ftpCredentials$: Observable<Credentials> = this.ftpQuery.selectFtpCredentials();
  loading$ = this.ftpQuery.loading$;

  constructor(
      private ftpService: FtpSettingsService,
      public ftpQuery: FtpSettingsQuery
  ) {
    this.ftpService.loadFtpSettings().subscribe();
  }
}
