
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './src/app.component';

// Show error to user if bootstrap fails
function showError(error: any) {
  console.error('Bootstrap error:', error);
  const appRoot = document.querySelector('app-root');
  if (appRoot) {
    appRoot.innerHTML = `
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; font-family: 'Montserrat', sans-serif; text-align: center; color: #64748b;">
        <h1 style="color: #ef4444; margin-bottom: 16px;">Lỗi tải trang</h1>
        <p style="margin-bottom: 8px;">Đã xảy ra lỗi khi tải ứng dụng.</p>
        <p style="font-size: 14px; color: #94a3b8;">Vui lòng thử lại sau hoặc liên hệ hỗ trợ.</p>
        <button onclick="location.reload()" style="margin-top: 24px; padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-family: 'Montserrat', sans-serif;">
          Tải lại trang
        </button>
      </div>
    `;
  }
}

bootstrapApplication(AppComponent, {
  providers: [provideZonelessChangeDetection()],
}).catch(showError);

// AI Studio always uses an `index.tsx` file for all project types.
