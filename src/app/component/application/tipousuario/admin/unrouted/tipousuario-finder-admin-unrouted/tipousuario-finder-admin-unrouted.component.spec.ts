/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TipousuarioFinderAdminUnroutedComponent } from './tipousuario-finder-admin-unrouted.component';

describe('TipousuarioFinderAdminUnroutedComponent', () => {
  let component: TipousuarioFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<TipousuarioFinderAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipousuarioFinderAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipousuarioFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
