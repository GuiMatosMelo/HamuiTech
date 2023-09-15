import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUnidadesComponent } from './grid-unidades.component';

describe('GridUnidadesComponent', () => {
  let component: GridUnidadesComponent;
  let fixture: ComponentFixture<GridUnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridUnidadesComponent]
    });
    fixture = TestBed.createComponent(GridUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
