import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChichesListComponent } from './chiches-list.component';

describe('ChichesListComponent', () => {
  let component: ChichesListComponent;
  let fixture: ComponentFixture<ChichesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChichesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChichesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
