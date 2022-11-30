import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarTransacaoComponent } from './cancelar-transacao.component';

describe('CancelarTransacaoComponent', () => {
  let component: CancelarTransacaoComponent;
  let fixture: ComponentFixture<CancelarTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarTransacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelarTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
