import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Udalosti } from '../../Udalosti';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-udalost-item',
  templateUrl: './udalost-item.component.html',
  styleUrls: ['./udalost-item.component.css'],
})
export class UdalostItemComponent implements OnInit {
  @Output() onRemoveEvent: EventEmitter<Udalosti> = new EventEmitter();
  @Output() onEditEvent: EventEmitter<Udalosti> = new EventEmitter();
  @Input() event: Udalosti;

  constructor(private uiServcie: UiService) {}

  ngOnInit(): void {}

  removeEvent(event: Udalosti) {
    this.onRemoveEvent.emit(event);
  }

  editEvent(event: Udalosti) {
    this.onEditEvent.emit(event);
    this.uiServcie.togglePopUp();
  }
}
