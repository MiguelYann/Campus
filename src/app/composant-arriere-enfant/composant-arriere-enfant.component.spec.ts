import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantArriereEnfantComponent } from './composant-arriere-enfant.component';

describe('ComposantArriereEnfantComponent', () => {
  let component: ComposantArriereEnfantComponent;
  let fixture: ComponentFixture<ComposantArriereEnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposantArriereEnfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantArriereEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
