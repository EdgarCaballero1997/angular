import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptBootstrapComponent } from './script-bootstrap.component';

describe('ScriptBootstrapComponent', () => {
  let component: ScriptBootstrapComponent;
  let fixture: ComponentFixture<ScriptBootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScriptBootstrapComponent]
    });
    fixture = TestBed.createComponent(ScriptBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
