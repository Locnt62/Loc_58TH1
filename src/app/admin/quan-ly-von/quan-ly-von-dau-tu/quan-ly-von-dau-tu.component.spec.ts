import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyVonDauTuComponent } from './quan-ly-von-dau-tu.component';

describe('QuanLyVonDauTuComponent', () => {
  let component: QuanLyVonDauTuComponent;
  let fixture: ComponentFixture<QuanLyVonDauTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyVonDauTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyVonDauTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
