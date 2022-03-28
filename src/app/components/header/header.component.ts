import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Udalosti } from '../../Udalosti';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() onAddTask = new EventEmitter();
  @Input() title: string;

  event: Udalosti = {
    id: '',
    event: 'vyroba veci',
    machine: 'cnc',
    name: 'Jakub',
    startTime: '10:10',
    endTime: '20:20',
  };

  constructor() {}

  ngOnInit(): void {}

  addEvent() {
    let events = [];
    this.event.id = Guid.raw();

    if (localStorage.getItem('Udalosti')) {
      events = JSON.parse(localStorage.getItem('Udalosti'));
      events = [this.event, ...events];
    } else {
      events = [this.event];
    }
    localStorage.setItem('Udalosti', JSON.stringify(events));

    this.onAddTask.emit();

    alert('TODO form to add event');
  }
}
