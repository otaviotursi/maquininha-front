import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoDebitoComponent } from './pagamento-debito.component';

describe('PagamentoDebitoComponent', () => {
  let component: PagamentoDebitoComponent;
  let fixture: ComponentFixture<PagamentoDebitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentoDebitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
