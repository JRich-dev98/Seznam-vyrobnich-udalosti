import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Udalosti } from 'src/app/Udalosti';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-udalost-form',
  templateUrl: './udalost-form.component.html',
  styleUrls: ['./udalost-form.component.css'],
})
export class UdalostFormComponent implements OnInit {
  @Output() onSubmitEvent = new EventEmitter();

  showPopUp: boolean = false;
  subscribtion: Subscription;

  editting: boolean = false;

  id: string = '';
  cinnost: string = '';
  stroj: string = '';
  jmeno: string = '';
  casZ: string = '';
  casK: string = '';
  komentar: string = '';

  event: Udalosti = {
    id: '',
    event: '',
    machine: '',
    name: '',
    startTime: '',
    endTime: '',
    comment: '',
  };

  constructor(private uiService: UiService) {
    this.subscribtion = this.uiService
      .onToggle()
      .subscribe((value) => (this.showPopUp = value));
  }

  ngOnInit(): void {}

  onEdit(event: Udalosti) {
    this.id = event.id;
    this.cinnost = event.event;
    this.stroj = event.machine;
    this.jmeno = event.name;
    this.casZ = event.startTime;
    this.casK = event.endTime;
    this.komentar = event.comment;
  }

  onSubmit() {
    let events: Udalosti[];

    if (!this.id) {
      this.id = Guid.raw();
    } else {
      this.editting = true;
    }
    if (
      !this.cinnost ||
      !this.stroj ||
      !this.jmeno ||
      !this.casZ ||
      !this.casK
    ) {
      alert('Vyplň prosím povinná pole!');
    } else {
      this.event.id = this.id;
      this.event.event = this.cinnost;
      this.event.machine = this.stroj;
      this.event.name = this.jmeno;
      this.event.startTime = this.casZ;
      this.event.endTime = this.casK;
      this.event.comment = this.komentar;

      if (!this.editting) {
        if (localStorage.getItem('Udalosti')) {
          events = JSON.parse(localStorage.getItem('Udalosti'));
          events = [this.event, ...events];
        } else {
          events = [this.event];
        }
      } else {
        events = JSON.parse(localStorage.getItem('Udalosti'));
        events.forEach((event) => {
          if (event.id == this.event.id) {
            event.event = this.event.event;
            event.machine = this.event.machine;
            event.name = this.event.name;
            event.startTime = this.event.startTime;
            event.endTime = this.event.endTime;
            event.comment = this.event.comment;
          }
        });
      }

      localStorage.setItem('Udalosti', JSON.stringify(events));
      this.onSubmitEvent.emit();

      this.uiService.togglePopUp();

      this.id = '';
      this.cinnost = '';
      this.jmeno = '';
      this.stroj = '';
      this.casZ = '';
      this.casK = '';
      this.komentar = '';

      this.editting = false;
    }
  }

  close() {
    this.uiService.togglePopUp();

    this.id = '';
    this.cinnost = '';
    this.jmeno = '';
    this.stroj = '';
    this.casZ = '';
    this.casK = '';
    this.komentar = '';
  }
}
