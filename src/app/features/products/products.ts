import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DecimalPipe, NgOptimizedImage } from '@angular/common';
import { PRODUCTS } from '../../core/mocks/products';
import { Product } from '../../core/models/product';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DecimalPipe, NgOptimizedImage],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  protected readonly producto: Product = PRODUCTS[2];
}
