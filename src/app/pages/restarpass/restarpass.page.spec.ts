import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestarpassPage } from './restarpass.page';

describe('RestarpassPage', () => {
  let component: RestarpassPage;
  let fixture: ComponentFixture<RestarpassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestarpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
