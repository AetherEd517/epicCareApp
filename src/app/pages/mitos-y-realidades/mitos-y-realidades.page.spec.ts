import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MitosYRealidadesPage } from './mitos-y-realidades.page';

describe('MitosYRealidadesPage', () => {
  let component: MitosYRealidadesPage;
  let fixture: ComponentFixture<MitosYRealidadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MitosYRealidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
