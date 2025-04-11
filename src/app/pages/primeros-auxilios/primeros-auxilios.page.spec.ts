import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimerosAuxiliosPage } from './primeros-auxilios.page';

describe('PrimerosAuxiliosPage', () => {
  let component: PrimerosAuxiliosPage;
  let fixture: ComponentFixture<PrimerosAuxiliosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerosAuxiliosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
