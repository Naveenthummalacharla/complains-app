import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideImageComponent } from './aside-image.component';

describe('AsideImageComponent', () => {
  let component: AsideImageComponent;
  let fixture: ComponentFixture<AsideImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideImageComponent]
    });
    fixture = TestBed.createComponent(AsideImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
