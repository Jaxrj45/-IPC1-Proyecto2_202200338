import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCitasDoctorComponent } from './mostrar-citas-doctor.component';

describe('MostrarCitasDoctorComponent', () => {
  let component: MostrarCitasDoctorComponent;
  let fixture: ComponentFixture<MostrarCitasDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarCitasDoctorComponent]
    });
    fixture = TestBed.createComponent(MostrarCitasDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
