import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarDestroyerComponent } from './star-destroyer.component';

describe('StarDestroyerComponent', () => {
  let component: StarDestroyerComponent;
  let fixture: ComponentFixture<StarDestroyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarDestroyerComponent]
    });
    fixture = TestBed.createComponent(StarDestroyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
