import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTerminalComponent } from './cadastrar-terminal.component';

describe('CadastrarTerminalComponent', () => {
  let component: CadastrarTerminalComponent;
  let fixture: ComponentFixture<CadastrarTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
