import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyChuDauTuComponent } from './quan-ly-chu-dau-tu.component';

describe('QuanLyChuDauTuComponent', () => {
  let component: QuanLyChuDauTuComponent;
  let fixture: ComponentFixture<QuanLyChuDauTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyChuDauTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyChuDauTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
