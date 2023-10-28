import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegristroPacienteComponent } from './regristro-paciente.component';

describe('RegristroPacienteComponent', () => {
  let component: RegristroPacienteComponent;
  let fixture: ComponentFixture<RegristroPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegristroPacienteComponent]
    });
    fixture = TestBed.createComponent(RegristroPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
