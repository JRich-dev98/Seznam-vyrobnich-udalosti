import { Component, Input, EventEmitter, ViewChild } from '@angular/core';
import { UdalostiComponent } from './components/udalosti/udalosti.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(UdalostiComponent) child: UdalostiComponent;

  public title = 'Výrobní události';

  addTask() {
    this.child.refreshData();
  }
}
