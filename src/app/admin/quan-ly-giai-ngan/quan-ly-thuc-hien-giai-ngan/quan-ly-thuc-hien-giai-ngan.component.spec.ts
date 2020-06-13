import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyThucHienGiaiNganComponent } from './quan-ly-thuc-hien-giai-ngan.component';

describe('QuanLyThucHienGiaiNganComponent', () => {
  let component: QuanLyThucHienGiaiNganComponent;
  let fixture: ComponentFixture<QuanLyThucHienGiaiNganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyThucHienGiaiNganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyThucHienGiaiNganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
