import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFaqComponent } from './grid-faq.component';

describe('GridFaqComponent', () => {
  let component: GridFaqComponent;
  let fixture: ComponentFixture<GridFaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridFaqComponent]
    });
    fixture = TestBed.createComponent(GridFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
