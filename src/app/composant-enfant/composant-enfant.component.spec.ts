import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantEnfantComponent } from './composant-enfant.component';

describe('ComposantEnfantComponent', () => {
  let component: ComposantEnfantComponent;
  let fixture: ComponentFixture<ComposantEnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposantEnfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
