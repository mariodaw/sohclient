/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EquipoViewAdminRoutedComponent } from './equipo-view-admin-routed.component';

describe('EquipoViewAdminRoutedComponent', () => {
  let component: EquipoViewAdminRoutedComponent;
  let fixture: ComponentFixture<EquipoViewAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoViewAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
