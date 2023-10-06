import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridProvaSocialComponent } from './grid-prova-social.component';

describe('GridProvaSocialComponent', () => {
  let component: GridProvaSocialComponent;
  let fixture: ComponentFixture<GridProvaSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridProvaSocialComponent]
    });
    fixture = TestBed.createComponent(GridProvaSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
