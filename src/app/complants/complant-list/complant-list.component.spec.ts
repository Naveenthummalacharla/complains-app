import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplantListComponent } from './complant-list.component';

describe('ComplantListComponent', () => {
  let component: ComplantListComponent;
  let fixture: ComponentFixture<ComplantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplantListComponent]
    });
    fixture = TestBed.createComponent(ComplantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
