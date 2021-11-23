import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasClientesComponent } from './tablas-clientes.component';

describe('TablasClientesComponent', () => {
  let component: TablasClientesComponent;
  let fixture: ComponentFixture<TablasClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablasClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
