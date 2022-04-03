import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showPopUp: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  togglePopUp(): void {
    this.showPopUp = !this.showPopUp;
    this.subject.next(this.showPopUp);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
