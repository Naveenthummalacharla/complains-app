import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComplantsComponent } from './new-complants.component';

describe('NewComplantsComponent', () => {
  let component: NewComplantsComponent;
  let fixture: ComponentFixture<NewComplantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewComplantsComponent]
    });
    fixture = TestBed.createComponent(NewComplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
