import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesoreriaMainPageComponent } from './tesoreria-main-page.component';

describe('TesoreriaMainPageComponent', () => {
  let component: TesoreriaMainPageComponent;
  let fixture: ComponentFixture<TesoreriaMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesoreriaMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesoreriaMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
