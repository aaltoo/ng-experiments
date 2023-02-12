import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaryPageComponent } from './ordinary-page.component';

describe('OrdinaryPageComponent', () => {
  let component: OrdinaryPageComponent;
  let fixture: ComponentFixture<OrdinaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdinaryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdinaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
