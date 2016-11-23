/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntelComponent } from './intel.component';

describe('IntelComponent', () => {
  let component: IntelComponent;
  let fixture: ComponentFixture<IntelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
