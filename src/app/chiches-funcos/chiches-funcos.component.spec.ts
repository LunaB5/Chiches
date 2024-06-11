import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChichesFuncosComponent } from './chiches-funcos.component';

describe('ChichesFuncosComponent', () => {
  let component: ChichesFuncosComponent;
  let fixture: ComponentFixture<ChichesFuncosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChichesFuncosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChichesFuncosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
