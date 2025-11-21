import { Component, ChangeDetectionStrategy, input, signal, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe],
})
export class ProductCardComponent {
  product = input.required<IProduct>();
  viewDetails = output<IProduct>();
  isHovering = signal(false);

  host = {
    '(mouseenter)': 'isHovering.set(true)',
    '(mouseleave)': 'isHovering.set(false)',
  };
}