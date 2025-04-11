import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SintomasYDiagnosticosPage } from './sintomas-y-diagnosticos.page';

describe('SintomasYDiagnosticosPage', () => {
  let component: SintomasYDiagnosticosPage;
  let fixture: ComponentFixture<SintomasYDiagnosticosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SintomasYDiagnosticosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
