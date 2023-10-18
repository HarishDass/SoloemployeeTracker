import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePageComponent } from './active-page.component';

describe('ActivePageComponent', () => {
  let component: ActivePageComponent;
  let fixture: ComponentFixture<ActivePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivePageComponent]
    });
    fixture = TestBed.createComponent(ActivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
