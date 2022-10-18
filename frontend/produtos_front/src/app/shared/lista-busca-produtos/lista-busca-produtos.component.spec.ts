import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBuscaProdutosComponent } from './lista-busca-produtos.component';

describe('ListaBuscaProdutosComponent', () => {
  let component: ListaBuscaProdutosComponent;
  let fixture: ComponentFixture<ListaBuscaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBuscaProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBuscaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
