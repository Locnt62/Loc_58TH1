import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDuanCustomerComponent } from './list-duan-customer.component';

describe('ListDuanCustomerComponent', () => {
  let component: ListDuanCustomerComponent;
  let fixture: ComponentFixture<ListDuanCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDuanCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDuanCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
