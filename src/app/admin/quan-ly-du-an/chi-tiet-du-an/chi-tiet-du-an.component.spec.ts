import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietDuAnComponent } from './chi-tiet-du-an.component';

describe('ChiTietDuAnComponent', () => {
  let component: ChiTietDuAnComponent;
  let fixture: ComponentFixture<ChiTietDuAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietDuAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietDuAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
