import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdalostiComponent } from './udalosti.component';

describe('UdalostiComponent', () => {
  let component: UdalostiComponent;
  let fixture: ComponentFixture<UdalostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdalostiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdalostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
