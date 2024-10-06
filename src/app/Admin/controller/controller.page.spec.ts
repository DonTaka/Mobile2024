import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControllerPage } from './controller.page';

describe('ControllerPage', () => {
  let component: ControllerPage;
  let fixture: ComponentFixture<ControllerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
