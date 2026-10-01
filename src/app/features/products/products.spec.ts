import { TestBed } from '@angular/core/testing';
import { PRODUCTS } from '../../core/mocks/products';
import { Products } from './products';

describe('Products', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products],
    }).compileComponents();
  });

  it('should show the data of the third product', async () => {
    const fixture = TestBed.createComponent(Products);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const producto = PRODUCTS[2];

    expect(compiled.querySelector('h2')?.textContent).toContain(`Producto ${producto.id}`);
    expect(compiled.textContent).toContain(producto.title);
    expect(compiled.textContent).toContain(producto.category);
    expect(compiled.textContent).toContain(`${producto.price}`);
    expect(compiled.textContent).toContain(`${producto.rating.rate}`);
    expect(compiled.textContent).toContain(`${producto.rating.count}`);
  });
});
