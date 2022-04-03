import { Component, Input, EventEmitter, ViewChild } from '@angular/core';
import { UdalostiComponent } from './components/udalosti/udalosti.component';
import { UdalostFormComponent } from './components/udalost-form/udalost-form.component';
import { Udalosti } from './Udalosti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(UdalostiComponent) childUdalosti: UdalostiComponent;
  @ViewChild(UdalostFormComponent) childForm: UdalostFormComponent;

  editEvent: Udalosti;

  public title = 'Výrobní události';

  refreshEvents() {
    this.childUdalosti.refreshData();
  }

  editEventEmit(event: Udalosti) {
    this.editEvent = event;
    this.childForm.onEdit(this.editEvent);
  }
}
