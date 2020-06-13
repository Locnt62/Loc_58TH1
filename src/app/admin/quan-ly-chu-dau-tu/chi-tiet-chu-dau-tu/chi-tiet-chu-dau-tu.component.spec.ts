import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietChuDauTuComponent } from './chi-tiet-chu-dau-tu.component';

describe('ChiTietChuDauTuComponent', () => {
  let component: ChiTietChuDauTuComponent;
  let fixture: ComponentFixture<ChiTietChuDauTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietChuDauTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietChuDauTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
