import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChichesCartComponent } from './chiches-cart.component';

describe('ChichesCartComponent', () => {
  let component: ChichesCartComponent;
  let fixture: ComponentFixture<ChichesCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChichesCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChichesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
