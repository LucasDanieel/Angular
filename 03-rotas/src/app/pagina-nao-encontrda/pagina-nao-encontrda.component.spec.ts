import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNaoEncontrdaComponent } from './pagina-nao-encontrda.component';

describe('PaginaNaoEncontrdaComponent', () => {
  let component: PaginaNaoEncontrdaComponent;
  let fixture: ComponentFixture<PaginaNaoEncontrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNaoEncontrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNaoEncontrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
