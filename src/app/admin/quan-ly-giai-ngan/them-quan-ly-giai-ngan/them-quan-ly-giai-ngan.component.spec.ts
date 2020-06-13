import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemQuanLyGiaiNganComponent } from './them-quan-ly-giai-ngan.component';

describe('ThemQuanLyGiaiNganComponent', () => {
  let component: ThemQuanLyGiaiNganComponent;
  let fixture: ComponentFixture<ThemQuanLyGiaiNganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemQuanLyGiaiNganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemQuanLyGiaiNganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
