import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePokeComponent } from './single-poke.component';

describe('SinglePokeComponent', () => {
  let component: SinglePokeComponent;
  let fixture: ComponentFixture<SinglePokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
