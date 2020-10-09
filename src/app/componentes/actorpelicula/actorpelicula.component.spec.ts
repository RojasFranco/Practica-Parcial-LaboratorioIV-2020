import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorpeliculaComponent } from './actorpelicula.component';

describe('ActorpeliculaComponent', () => {
  let component: ActorpeliculaComponent;
  let fixture: ComponentFixture<ActorpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorpeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
