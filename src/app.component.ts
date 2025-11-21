import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { IProduct } from './product.interface';
import { FooterComponent } from './components/footer/footer.component';

type View = 'qr' | 'frame';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProductCardComponent,
    ProductDetailComponent,
    CurrencyPipe,
    FooterComponent,
  ],
})
export class AppComponent {
  selectedProduct = signal<IProduct | null>(null);
  isMenuOpen = signal(false);
  activeView = signal<View>('qr');

  qrProducts = signal<IProduct[]>([
    {
      id: 1,
      name: 'QR Đếm ngược',
      price: 159000,
      tag: 'Hot 🔥🔥🔥',
      tagClass: 'bg-red-500 text-white',
      imageUrl: 'https://i.imgur.com/k2a4pG3.png',
      videoUrl: 'https://i.imgur.com/7eIqg6c.mp4',
      detailImages: [
        'https://i.imgur.com/k2a4pG3.png',
        'https://i.imgur.com/g8e1L20.png',
      ],
      description: [
        'Bạn chỉ cần nhập đầy đủ các thông tin:',
        '1 câu nền (3-5 chữ) sẽ rơi xuống liên tục làm background.',
        '3 câu sau xuất hiện khi màn hình đếm ngược 3... 2... 1, mỗi câu từ 3-5 chữ để đảm bảo đẹp mắt.',
        '1 câu cuối (5-8 chữ) nằm trong trái tim, xuất hiện sau cùng như lời kết trọn cảm xúc.',
        'Khi quét mã người nhận sẽ thấy nền chữ rơi ấn tượng, sau đó là màn đếm ngược 3-2-1 đầy hồi hộp. Ba câu chữ ngắn lần lượt xuất hiện, dẫn dắt cảm xúc từng bước, và cuối cùng trái tim hiện lên với câu đặc biệt bạn dành cho họ - khoảnh khắc vỡ oà khó quên.',
        'QR Đếm Ngược phù hợp cho những lời tỏ tình, cầu hôn, chúc mừng hoặc bất kỳ dịp nào bạn muốn tạo hiệu ứng “chờ đợi để bùng nổ cảm xúc".',
      ],
      features: [
        'Cá nhân hoá 100%',
        'Nhận mã kích hoạt form tạo ngay sau khi thanh toán',
        'Hướng dẫn sử dụng chi tiết trong form',
        'Hỗ trợ chỉnh sửa trong 24h',
      ],
    },
    {
      id: 2,
      name: 'QR Chữ rơi',
      price: 159000,
      tag: 'Best Seller',
      tagClass: 'bg-blue-500 text-white',
      imageUrl: 'https://i.imgur.com/g8e1L20.png',
      videoUrl: 'https://i.imgur.com/3qF4zEf.mp4',
      detailImages: ['https://i.imgur.com/g8e1L20.png'],
      description: ['Mô tả chi tiết cho QR Chữ rơi.'],
      features: ['Tính năng nổi bật 1', 'Tính năng nổi bật 2'],
    },
    {
      id: 3,
      name: 'QR Thư Happy Birthday',
      price: 159000,
      tag: 'Hot New 🔥',
      tagClass: 'bg-pink-400 text-white',
      imageUrl: 'https://i.imgur.com/YwN9qSC.png',
      videoUrl: 'https://i.imgur.com/dazwLSK.mp4',
      detailImages: ['https://i.imgur.com/YwN9qSC.png'],
      description: ['Mô tả chi tiết cho QR Thư Happy Birthday.'],
      features: ['Tính năng nổi bật 1', 'Tính năng nổi bật 2'],
    },
    {
      id: 4,
      name: 'QR Pháo hoa',
      price: 159000,
      tag: 'Hot New 🔥',
      tagClass: 'bg-pink-400 text-white',
      imageUrl: 'https://i.imgur.com/L13aKiS.png',
      videoUrl: 'https://i.imgur.com/YnO1w4s.mp4',
      detailImages: ['https://i.imgur.com/L13aKiS.png'],
      description: ['Mô tả chi tiết cho QR Pháo hoa.'],
      features: ['Tính năng nổi bật 1', 'Tính năng nổi bật 2'],
    },
    {
      id: 5,
      name: 'QR Love Letter',
      price: 159000,
      tag: 'Hot New 🔥',
      tagClass: 'bg-pink-400 text-white',
      imageUrl: 'https://i.imgur.com/iJqgv4S.png',
      videoUrl: 'https://i.imgur.com/T0a3aG1.mp4',
      detailImages: ['https://i.imgur.com/iJqgv4S.png'],
      description: ['Mô tả chi tiết cho QR Love Letter.'],
      features: ['Tính năng nổi bật 1', 'Tính năng nổi bật 2'],
    },
    {
      id: 6,
      name: 'QR Thư tình',
      price: 159000,
      tag: 'New',
      tagClass: 'bg-gray-500 text-white',
      imageUrl: 'https://i.imgur.com/J8t45I9.png',
      videoUrl: 'https://i.imgur.com/8m5g2bJ.mp4',
      detailImages: ['https://i.imgur.com/J8t45I9.png'],
      description: ['Mô tả chi tiết cho QR Thư tình.'],
      features: ['Tính năng nổi bật 1', 'Tính năng nổi bật 2'],
    },
  ]);

  frameProducts = signal<IProduct[]>([
    {
      id: 7,
      name: 'Khung ảnh Polaroid',
      price: 250000,
      tag: 'New',
      tagClass: 'bg-indigo-500 text-white',
      imageUrl: 'https://picsum.photos/seed/frame1/400/500',
      videoUrl: 'https://i.imgur.com/dazwLSK.mp4',
      detailImages: ['https://picsum.photos/seed/frame1/400/500'],
      description: ['Lưu giữ khoảnh khắc với khung ảnh Polaroid độc đáo.'],
      features: ['Chất liệu cao cấp', 'In ảnh sắc nét', 'Thiết kế tối giản'],
    },
    {
      id: 8,
      name: 'Khung ảnh Vintage',
      price: 280000,
      tag: 'Best Seller',
      tagClass: 'bg-blue-500 text-white',
      imageUrl: 'https://picsum.photos/seed/frame2/400/500',
      videoUrl: 'https://i.imgur.com/7eIqg6c.mp4',
      detailImages: ['https://picsum.photos/seed/frame2/400/500'],
      description: [
        'Khung ảnh Vintage mang lại cảm giác hoài niệm, ấm cúng.',
      ],
      features: [
        'Thiết kế cổ điển',
        'Nhiều màu sắc lựa chọn',
        'Phù hợp mọi không gian',
      ],
    },
    {
      id: 9,
      name: 'Khung ảnh Đa năng',
      price: 320000,
      tag: 'Hot 🔥🔥🔥',
      tagClass: 'bg-red-500 text-white',
      imageUrl: 'https://picsum.photos/seed/frame3/400/500',
      videoUrl: 'https://i.imgur.com/3qF4zEf.mp4',
      detailImages: ['https://picsum.photos/seed/frame3/400/500'],
      description: ['Trưng bày nhiều ảnh cùng lúc với khung ảnh đa năng.'],
      features: [
        'Chứa được 5-7 ảnh',
        'Thiết kế hiện đại',
        'Dễ dàng thay đổi ảnh',
      ],
    },
  ]);

  products = computed(() => {
    if (this.activeView() === 'qr') {
      return this.qrProducts();
    }
    return this.frameProducts();
  });

  selectProduct(product: IProduct): void {
    this.selectedProduct.set(product);
    window.scrollTo(0, 0);
  }

  goBack(): void {
    this.selectedProduct.set(null);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  setView(view: View): void {
    this.activeView.set(view);
    this.isMenuOpen.set(false);
    this.selectedProduct.set(null);
  }
}
