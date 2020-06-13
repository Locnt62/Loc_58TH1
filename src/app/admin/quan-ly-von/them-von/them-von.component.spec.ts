import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemVonComponent } from './them-von.component';

describe('ThemVonComponent', () => {
  let component: ThemVonComponent;
  let fixture: ComponentFixture<ThemVonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemVonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemVonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
