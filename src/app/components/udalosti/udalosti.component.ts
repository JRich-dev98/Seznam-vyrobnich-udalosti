import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Udalosti } from '../../Udalosti';

@Component({
  selector: 'app-udalosti',
  templateUrl: './udalosti.component.html',
  styleUrls: ['./udalosti.component.css'],
})
export class UdalostiComponent implements OnInit {
  @Output() onEditEvent: EventEmitter<Udalosti> = new EventEmitter();
  public events: Udalosti[];

  constructor() {}

  ngOnInit(): void {
    this.refreshData();
  }

  public refreshData() {
    this.events = JSON.parse(localStorage.getItem('Udalosti'));
  }

  removeEvent(event: Udalosti) {
    this.events = this.events.filter((e) => e.id !== event.id);
    localStorage.setItem('Udalosti', JSON.stringify(this.events));
  }

  editEvent(event: Udalosti) {
    this.onEditEvent.emit(event);
  }
}
