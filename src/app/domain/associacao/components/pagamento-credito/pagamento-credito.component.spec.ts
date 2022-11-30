import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoCreditoComponent } from './pagamento-credito.component';

describe('PagamentoCreditoComponent', () => {
  let component: PagamentoCreditoComponent;
  let fixture: ComponentFixture<PagamentoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentoCreditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
