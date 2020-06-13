import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChudautuCustomerComponent } from './list-chudautu-customer.component';

describe('ListChudautuCustomerComponent', () => {
  let component: ListChudautuCustomerComponent;
  let fixture: ComponentFixture<ListChudautuCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChudautuCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChudautuCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
