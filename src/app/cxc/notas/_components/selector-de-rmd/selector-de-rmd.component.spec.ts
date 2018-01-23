import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDeRmdComponent } from './selector-de-rmd.component';

describe('SelectorDeRmdComponent', () => {
  let component: SelectorDeRmdComponent;
  let fixture: ComponentFixture<SelectorDeRmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorDeRmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorDeRmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
