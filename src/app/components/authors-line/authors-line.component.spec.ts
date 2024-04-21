import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsLineComponent } from './authors-line.component';

describe('AuthorsLineComponent', () => {
  let component: AuthorsLineComponent;
  let fixture: ComponentFixture<AuthorsLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorsLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
