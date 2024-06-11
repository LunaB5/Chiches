import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChichesAboutComponent } from './chiches-about.component';

describe('ChichesAboutComponent', () => {
  let component: ChichesAboutComponent;
  let fixture: ComponentFixture<ChichesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChichesAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChichesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
