import {Injectable} from "@angular/core";
import {Query} from "@datorama/akita";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {FtpSettingsState} from "./model";
import {FtpSettingsStore} from "./store";
import {Credentials, FtpAddress} from "../api/ftp-settings.models";

@Injectable({ providedIn: "root" })
export class FtpSettingsQuery extends Query<FtpSettingsState> {

  loading$ = this.select('loading');

  protected count = 0;
  constructor(store: FtpSettingsStore) {
    super(store);
  }

  public selectRawFtpSettings(): Observable<string> {
    return this.select().pipe(
      map((settings) => {
        return `address: ${settings.address}, port: ${settings.port}, login: ${settings.login}, password: ${settings.password}`;
      })
    );
  }

  // TODO: Написать метод, который возвращает ftp credentials в виде {username: string, password: string}
  public selectFtpCredentials(): Observable<Credentials> {
    return  this.select(['login', 'password']).pipe(
        map( ({login, password}) => ({username: login, password}) as Credentials)
    )
  }

  // TODO: Написать метод, который возвращает ftp credentials с портом 21 по умолчанию, если он не указан
  public selectFtpAddress(): Observable<FtpAddress> {
    return  this.select(['address', 'port']).pipe(
        map( ({address, port = '21'}) => ({address, port}) as FtpAddress)
    )
  }

  public override selectLoading(): Observable<boolean> {
    return this.select("loading");
  }
}
