import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdalostItemComponent } from './udalost-item.component';

describe('UdalostItemComponent', () => {
  let component: UdalostItemComponent;
  let fixture: ComponentFixture<UdalostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdalostItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdalostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
