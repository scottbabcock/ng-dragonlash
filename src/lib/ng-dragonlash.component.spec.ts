import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDragonlashComponent } from './ng-dragonlash.component';

describe('NgDragonlashComponent', () => {
  let component: NgDragonlashComponent;
  let fixture: ComponentFixture<NgDragonlashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDragonlashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDragonlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
