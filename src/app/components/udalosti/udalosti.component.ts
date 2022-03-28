import { Component, OnInit, Input } from '@angular/core';
import { Udalosti } from '../../Udalosti';

@Component({
  selector: 'app-udalosti',
  templateUrl: './udalosti.component.html',
  styleUrls: ['./udalosti.component.css'],
})
export class UdalostiComponent implements OnInit {
  @Input() refreshDataInput;
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
    alert('TODO edit');
  }
}
