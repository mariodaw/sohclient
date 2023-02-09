/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EquipoDetailAdminUnroutedComponent } from './equipo-detail-admin-unrouted.component';

describe('EquipoDetailAdminUnroutedComponent', () => {
  let component: EquipoDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<EquipoDetailAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoDetailAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
