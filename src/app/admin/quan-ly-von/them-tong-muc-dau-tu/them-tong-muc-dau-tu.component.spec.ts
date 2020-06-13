import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemTongMucDauTuComponent } from './them-tong-muc-dau-tu.component';

describe('ThemTongMucDauTuComponent', () => {
  let component: ThemTongMucDauTuComponent;
  let fixture: ComponentFixture<ThemTongMucDauTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemTongMucDauTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemTongMucDauTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
