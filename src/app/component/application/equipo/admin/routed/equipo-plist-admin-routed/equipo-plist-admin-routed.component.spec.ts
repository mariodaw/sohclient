/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EquipoPlistAdminRoutedComponent } from './equipo-plist-admin-routed.component';

describe('EquipoPlistAdminRoutedComponent', () => {
  let component: EquipoPlistAdminRoutedComponent;
  let fixture: ComponentFixture<EquipoPlistAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoPlistAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
