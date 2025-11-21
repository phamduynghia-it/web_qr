import { Component, ChangeDetectionStrategy, input, output, signal } from '@angular/core';
import { IProduct } from '../../product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  product = input.required<IProduct>();
  close = output<void>();
  
  currentImageIndex = signal(0);

  nextImage(): void {
    this.currentImageIndex.update(current => (current + 1) % this.product().detailImages.length);
  }

  prevImage(): void {
    this.currentImageIndex.update(current => (current - 1 + this.product().detailImages.length) % this.product().detailImages.length);
  }

  setImage(index: number): void {
    this.currentImageIndex.set(index);
  }
}
