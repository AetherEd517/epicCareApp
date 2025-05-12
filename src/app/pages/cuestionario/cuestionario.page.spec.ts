import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuestionarioPage } from './cuestionario.page';

describe('CuestionarioPage', () => {
  let component: CuestionarioPage;
  let fixture: ComponentFixture<CuestionarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
