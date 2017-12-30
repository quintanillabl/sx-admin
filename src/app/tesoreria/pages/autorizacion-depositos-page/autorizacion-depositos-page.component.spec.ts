import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacionDepositosPageComponent } from './autorizacion-depositos-page.component';

describe('AutorizacionDepositosPageComponent', () => {
  let component: AutorizacionDepositosPageComponent;
  let fixture: ComponentFixture<AutorizacionDepositosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizacionDepositosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizacionDepositosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
