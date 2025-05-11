import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectorioPage } from './directorio.page';

describe('DirectorioPage', () => {
  let component: DirectorioPage;
  let fixture: ComponentFixture<DirectorioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
