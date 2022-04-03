import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdalostFormComponent } from './udalost-form.component';

describe('UdalostFormComponent', () => {
  let component: UdalostFormComponent;
  let fixture: ComponentFixture<UdalostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdalostFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdalostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
