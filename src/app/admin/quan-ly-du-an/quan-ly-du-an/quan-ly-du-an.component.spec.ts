import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDuAnComponent } from './quan-ly-du-an.component';

describe('QuanLyDuAnComponent', () => {
  let component: QuanLyDuAnComponent;
  let fixture: ComponentFixture<QuanLyDuAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyDuAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyDuAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
