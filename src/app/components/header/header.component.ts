import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() onAddEvent = new EventEmitter();
  @Input() title: string;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  showPopUp() {
    this.uiService.togglePopUp();

    this.onAddEvent.emit();
  }
}
