import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab9Page } from './tab9.page';
import { async } from '@angular/core/testing';

describe('Tab9Page', () => {
  let component: Tab9Page;
  let fixture: ComponentFixture<Tab9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
