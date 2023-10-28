import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDoctoresComponent } from './top-doctores.component';

describe('TopDoctoresComponent', () => {
  let component: TopDoctoresComponent;
  let fixture: ComponentFixture<TopDoctoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopDoctoresComponent]
    });
    fixture = TestBed.createComponent(TopDoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
