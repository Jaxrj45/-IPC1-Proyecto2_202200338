import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermeraEditarCitaComponent } from './enfermera-editar-cita.component';

describe('EnfermeraEditarCitaComponent', () => {
  let component: EnfermeraEditarCitaComponent;
  let fixture: ComponentFixture<EnfermeraEditarCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnfermeraEditarCitaComponent]
    });
    fixture = TestBed.createComponent(EnfermeraEditarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
