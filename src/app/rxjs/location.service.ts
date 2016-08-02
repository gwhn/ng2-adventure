import {Injectable} from '@angular/core';
import {ReplaySubject, Observable} from "rxjs/Rx";

@Injectable()
export class LocationService {

  private source = new ReplaySubject<{type;x;y;}>(1);
  stream:Observable<{type;x;y;}> = this.source.asObservable();

  move(location:{type;x;y;}) {
    this.source.next(location);
  }
}
