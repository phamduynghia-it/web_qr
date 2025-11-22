// --- PRODUCT DATA (from app.component.ts) ---

const qrProducts = [
  {
      id: 1,
      name: 'QR Chữ rơi (có ảnh)',
      price: 159000,
      tag: 'Hot 🔥🔥🔥',
      tagClass: 'bg-red-500 text-white',
      imageUrl: 'images/wordimg.jpg',
      videoUrl: 'images/wordimg.mp4',
      detailImages: [
        'images/wordimg.mp4',
      ],
      description: [
        "quét qr sau đó chạm vào màn nhạc sẽ được phát"
      ],
      features: [
        'Mỗi câu 4-6 từ',
        'Chữ, nhạc, ảnh theo yêu cầu',
        'Hỗ trợ chỉnh sửa trong 24h'
      ],
    },
    {
      id: 7,
      name: 'QR Đếm ngược',
      price: 159000,
      tag: 'Hot 🔥🔥🔥',
      tagClass: 'bg-red-500 text-white',
      imageUrl: 'images/matrixrain.jpg',
      videoUrl: 'images/matrixrain.mp4',
      detailImages: [
        'images/matrixrain.jpg',
        'images/matrixrain.mp4',
      ],
       description: [
        "quét qr sau đó chạm vào màn nhạc sẽ được phát"
      ],
      features: [
        'Mỗi câu 4-6 từ',
        'Chữ, nhạc theo yêu cầu',
        'Hỗ trợ chỉnh sửa trong 24h'
      ],
    },
    {
      id: 2,
      name: 'QR Chữ rơi',
      price: 159000,
      tag: 'Best Seller',
      tagClass: 'bg-blue-500 text-white',
      imageUrl: 'images/wordrain.jpg',
      videoUrl: 'images/wordrain.mp4',
      detailImages: ['images/wordrain.mp4'],
       description: [
        "quét qr sau đó chạm vào màn nhạc sẽ được phát"
      ],
      features: [
        'Mỗi câu 4-6 từ',
        'Chữ, nhạc theo yêu cầu',
        'Hỗ trợ chỉnh sửa trong 24h'
      ],
    },
    {
      id: 3,
      name: 'QR Thư lời nhắn',
      price: 159000,
      tag: 'Hot New 🔥',
      tagClass: 'bg-pink-400 text-white',
      imageUrl: 'images/letter.jpg',
      videoUrl: 'images/letter.mp4',
      detailImages: ['images/letter.mp4'],
       description: [
        "quét qr sau đó chạm vào màn nhạc sẽ được phát"
      ],
      features: [
        'Chữ, nhạc theo yêu cầu',
        'Hỗ trợ chỉnh sửa trong 24h'
      ],
    },
    {
      id: 4,
      name: 'QR Vòng xoay trái tim',
      price: 159000,
      tag: 'Hot New 🔥',
      tagClass: 'bg-pink-400 text-white',
      imageUrl: 'images/traitim.jpg',
      videoUrl: 'images/traitim.mp4',
      detailImages: ['images/traitim.mp4'],
       description: [
        "quét qr sau đó chạm vào màn nhạc sẽ được phát"
      ],
      features: [
        'Chữ, nhạc, ảnh theo yêu cầu',
        'Hỗ trợ chỉnh sửa trong 24h'
      ],
    },
    {
      id: 5,
      name: 'QR Pháo hoa',
      price: 159000,
      tag: 'Hot New 🔥',
      tagClass: 'bg-pink-400 text-white',
      imageUrl: 'images/phaohoa.jpg',
      videoUrl: 'https://i.imgur.com/T0a3aG1.mp4',
      detailImages: ['images/phaohoa.mp4'],
      description: [
        "quét qr sau đó chạm vào màn nhạc sẽ được phát"
      ],
      features: [
        'Mỗi câu 3-4 từ',
        'Chữ nhạc theo yêu cầu',
        'Hỗ trợ chỉnh sửa trong 24h'
      ],
    },
    {
      id: 6,
      name: 'Web tình yêu',
      price: 159000,
      tag: 'New',
      tagClass: 'bg-gray-500 text-white',
      imageUrl: 'images/webtinhyeu.jpg',
      videoUrl: 'https://i.imgur.com/8m5g2bJ.mp4',
      detailImages: ['images/webtinhyeu.mp4'],
       description: [
        "quét qr sau đó chạm vào màn nhạc sẽ được phát"
      ],
      features: [
        'Chữ, nhạc, ảnh theo yêu cầu',
        'Hỗ trợ chỉnh sửa trong 24h'
      ],
    },
  ];

  const frameProducts = [
    {
      id: 10,
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
  ];

// --- APP STATE (Trạng thái ứng dụng) ---

let activeView = 'qr'; // 'qr' hoặc 'frame'
let selectedProduct = null;
let isMenuOpen = false;
let currentImageIndex = 0; // KHÔNG DÙNG NỮA

// --- UTILITY FUNCTION ---

// Hàm định dạng tiền tệ (VND) - GIỮ LẠI NHƯNG KHÔNG DÙNG NỮA
function formatCurrency(price) {
  return price.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).replace(/\s/g, ''); // Bỏ khoảng trắng trước VND
}

// --- STATE MANAGEMENT FUNCTIONS ---

function setView(view) {
  activeView = view;
  selectedProduct = null;
  isMenuOpen = false;
  renderApp();
  updateNavClasses();
}

function selectProduct(productId) {
  const allProducts = [...qrProducts, ...frameProducts];
  selectedProduct = allProducts.find(p => p.id === productId);
  currentImageIndex = 0; // KHÔNG DÙNG NỮA
  renderApp();
  window.scrollTo(0, 0);
}

function goBack() {
  selectedProduct = null;
  renderApp();
  window.scrollTo(0, 0);
}

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  const menuElement = document.getElementById('mobile-menu-sidebar');
  if (isMenuOpen) {
    menuElement.classList.remove('hidden');
  } else {
    menuElement.classList.add('hidden');
  }
}

// --- PRODUCT DETAIL CAROUSEL LOGIC (KHÔNG DÙNG NỮA) ---
function nextImage() {
  if (selectedProduct && selectedProduct.detailImages.length > 0) {
    currentImageIndex = (currentImageIndex + 1) % selectedProduct.detailImages.length;
    renderApp();
  }
}

function prevImage() {
  if (selectedProduct && selectedProduct.detailImages.length > 0) {
    currentImageIndex = (currentImageIndex - 1 + selectedProduct.detailImages.length) % selectedProduct.detailImages.length;
    renderApp();
  }
}

function setImage(index) {
  if (selectedProduct && selectedProduct.detailImages.length > index) {
    currentImageIndex = index;
    renderApp();
  }
}

// --- RENDERING FUNCTIONS ---

// Render HTML cho 1 Product Card
function renderProductCard(product) {
  // *** ĐIỀU CHỈNH: Loại bỏ hiển thị giá và dùng object-contain cho ảnh/video ***
  return `
    <div 
        class="product-card group flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
        data-product-id="${product.id}"
    >
      <div 
        class="relative w-full aspect-[3/2] cursor-pointer overflow-hidden media-container" 
        onclick="selectProduct(${product.id})"
      >
        <div class="absolute inset-0">
            <video 
                src="${product.videoUrl}" 
                class="w-full h-full object-contain video-element hidden" 
                preload="metadata"
                poster="${product.imageUrl}"
                aria-label="Video review sản phẩm ${product.name}"
            >
                Your browser does not support the video tag.
            </video>
            
            <img 
                src="${product.imageUrl}" 
                alt="${product.name}" 
                class="w-full h-full object-contain image-element" 
            />
            
            </div>

        <div class="absolute top-0 left-0 p-4 w-full">
          <div class="flex flex-col items-start gap-2">
            <div 
              class="text-xs font-bold py-1.5 px-3 rounded-full ${product.tagClass}"
            >
              ${product.tag}
            </div>
            <div class="bg-black bg-opacity-50 text-white text-sm py-1.5 px-4 rounded-full backdrop-blur-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              <span>Video</span>
            </div>
          </div>
        </div>
      </div>

      <div class="p-4 flex flex-col items-center text-center gap-3">
        <h3 class="font-bold text-lg text-slate-800">${product.name}</h3>
        <div class="flex items-center gap-3 mt-1">
          <button 
            onclick="selectProduct(${product.id})"
            class="bg-white border border-slate-700 text-slate-700 hover:bg-slate-100 text-sm font-semibold py-2 px-6 rounded-lg transition-colors">
              Xem video mẫu
          </button>
          <a href="https://zalo.me/0359369930" class="bg-slate-800 text-white hover:bg-slate-900 text-sm font-semibold py-2 px-6 rounded-lg transition-colors">
            Liên hệ
          </a>
        </div>
      </div>
    </div>
  `;
}

// Render HTML cho Product Detail (ĐÃ CHUYỂN THÀNH VIDEO DUY NHẤT)
function renderProductDetail() {
  if (!selectedProduct) return '';

  const product = selectedProduct;

  const descriptionHtml = product.description.map(line => `<p>${line}</p>`).join('');
  const featuresHtml = product.features.map(feature => `
    <li class="flex items-center gap-3">
      <svg class="h-6 w-6 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
      <span class="text-slate-600">${feature}</span>
    </li>
  `).join('');

  // *** ĐIỀU CHỈNH: Tỉ lệ khung hình aspect-[9/16] và object-contain ***
  return `
    <section class="py-12 md:py-20">
      <div class="mb-8">
        <button onclick="goBack()" class="text-slate-600 hover:text-slate-900 flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>Trở lại</span>
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <div id="product-image-carousel" class="relative w-full aspect-[9/16] md:aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
          
          <video 
            src="${product.videoUrl}" 
            class="w-full h-full object-contain"
            autoplay muted loop playsinline controls
            poster="${product.imageUrl}"
            aria-label="Video giới thiệu sản phẩm ${product.name}"
          >
            Your browser does not support the video tag.
          </video>
          </div>

        <div class="flex flex-col">
          <h1 class="text-3xl lg:text-4xl font-bold text-slate-900">${product.name}</h1>
          
          <div class="mt-6 text-slate-600 space-y-3 leading-relaxed">
            ${descriptionHtml}
          </div>

          <div class="mt-8">
            <h3 class="font-bold text-lg text-slate-800 mb-4">Đặc điểm nổi bật</h3>
            <ul class="space-y-3">
              ${featuresHtml}
            </ul>
          </div>

          <div class="mt-auto pt-10">
            <a href="#" class="w-full bg-slate-800 text-white hover:bg-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors text-center block">
              Liên hệ ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}


// --- MAIN APPLICATION RENDERING ---

function renderApp() {
  const mainContent = document.getElementById('main-content');
  let htmlContent = '';

  if (selectedProduct) {
    // Render Product Detail
    htmlContent = renderProductDetail();
  } else {
    // Render Hero and Product List
    const currentProducts = activeView === 'qr' ? qrProducts : frameProducts;
    
    // Hero Section
    if (activeView === 'qr') {
      htmlContent += `
        <section class="text-center py-16 md:py-24 px-4">
          <h1 class="text-5xl md:text-7xl text-slate-900 tracking-wider">
            A <span class="font-dancing-script text-6xl md:text-8xl">Gift</span>
            FOR YOU
          </h1>
          <p class="max-w-2xl mx-auto mt-6 text-gray-500 leading-relaxed">
            DN GIFTS SHOP – Nơi cảm xúc được gửi gắm qua từng món quà. Từ khung
            ảnh thiết kế riêng, hình nền QR tình yêu, mỗi
            món quà đều được tạo nên để thay bạn nói lời thương, gửi điều khó nói,
            và khiến ai đó cảm thấy mình thật đặc biệt.
          </p>
        </section>
      `;
    }
    
    // Products Section
    const productCardsHtml = currentProducts.map(renderProductCard).join('');

    // Đã chỉnh grid layout thành lg:grid-cols-3
    htmlContent += `
      <section class="pb-24 pt-8">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          id="product-grid"
        >
          ${productCardsHtml}
        </div>
      </section>
    `;
  }
  
  mainContent.innerHTML = htmlContent;

  // Gắn lại logic hover sau khi DOM được cập nhật
  attachHoverListeners();
}


// --- HOVER LOGIC (ĐÃ BỎ LOGIC SPINNER VÀ LOADING) ---

function attachHoverListeners() {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    // XÓA toàn bộ logic hover/mouseleave để không phát video khi rê chuột 
    
    // Gỡ bỏ event listener cũ nếu có (để tránh lặp)
    card.removeEventListener('mouseenter', card.mouseenterHandler);
    card.removeEventListener('mouseleave', card.mouseleaveHandler);
    
  });
}

// --- NAVIGATION CLASS UPDATER ---

function updateNavClasses() {
  const qrBtnDesktop = document.getElementById('qr-view-btn-desktop');
  const frameBtnDesktop = document.getElementById('frame-view-btn-desktop');

  if (qrBtnDesktop) {
    qrBtnDesktop.className = `font-medium transition-colors ${
      activeView === 'qr'
        ? 'text-slate-900 border-b-2 border-slate-900'
        : 'text-slate-600 hover:text-slate-900'
    }`;
  }

  if (frameBtnDesktop) {
    frameBtnDesktop.className = `font-medium transition-colors ${
      activeView === 'frame'
        ? 'text-slate-900 border-b-2 border-slate-900'
        : 'text-slate-600 hover:text-slate-900'
    }`;
  }
}

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
  renderApp(); // Render the initial view
  updateNavClasses(); // Set initial navigation highlights
});