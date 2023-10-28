import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMedicinaComponent } from './mostrar-medicina.component';

describe('MostrarMedicinaComponent', () => {
  let component: MostrarMedicinaComponent;
  let fixture: ComponentFixture<MostrarMedicinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarMedicinaComponent]
    });
    fixture = TestBed.createComponent(MostrarMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
