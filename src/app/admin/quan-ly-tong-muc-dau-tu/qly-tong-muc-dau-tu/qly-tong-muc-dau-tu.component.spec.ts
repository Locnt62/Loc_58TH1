import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlyTongMucDauTuComponent } from './qly-tong-muc-dau-tu.component';

describe('QlyTongMucDauTuComponent', () => {
  let component: QlyTongMucDauTuComponent;
  let fixture: ComponentFixture<QlyTongMucDauTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlyTongMucDauTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlyTongMucDauTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
