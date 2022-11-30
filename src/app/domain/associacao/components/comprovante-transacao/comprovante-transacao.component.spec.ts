import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprovanteTransacaoComponent } from './comprovante-transacao.component';

describe('ComprovanteTransacaoComponent', () => {
  let component: ComprovanteTransacaoComponent;
  let fixture: ComponentFixture<ComprovanteTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprovanteTransacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprovanteTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
