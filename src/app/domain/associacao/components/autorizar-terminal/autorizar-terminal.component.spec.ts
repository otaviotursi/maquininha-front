import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizarTerminalComponent } from './autorizar-terminal.component';

describe('AutorizarTerminalComponent', () => {
  let component: AutorizarTerminalComponent;
  let fixture: ComponentFixture<AutorizarTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizarTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorizarTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
