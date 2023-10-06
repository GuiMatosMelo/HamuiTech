import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridQuemSomosComponent } from './grid-quem-somos.component';

describe('GridQuemSomosComponent', () => {
  let component: GridQuemSomosComponent;
  let fixture: ComponentFixture<GridQuemSomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridQuemSomosComponent]
    });
    fixture = TestBed.createComponent(GridQuemSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
