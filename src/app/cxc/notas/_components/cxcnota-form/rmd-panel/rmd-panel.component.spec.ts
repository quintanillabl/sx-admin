import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmdPanelComponent } from './rmd-panel.component';

describe('RmdPanelComponent', () => {
  let component: RmdPanelComponent;
  let fixture: ComponentFixture<RmdPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmdPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmdPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
