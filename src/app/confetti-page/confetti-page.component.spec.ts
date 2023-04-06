import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfettiPageComponent } from './confetti-page.component';

describe('ConfettiPageComponent', () => {
  let component: ConfettiPageComponent;
  let fixture: ComponentFixture<ConfettiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfettiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfettiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
