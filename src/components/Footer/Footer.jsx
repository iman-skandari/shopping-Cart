const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800 mt-16">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-white">
              Tech<span className="text-orange-500">Gear</span>
            </h3>
            <p className="text-sm leading-relaxed">
              بهترین گجت‌ها و لوازم الکترونیکی با قیمت مناسب و گارانتی معتبر.
              خرید آسان، ارسال سریع.
            </p>
            <div className="flex gap-3 pt-2">
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.3 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* Youtube */}
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">دسترسی سریع</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-orange-500 transition">صفحه اصلی</a>
              </li>
              <li>
                <a href="/products" className="hover:text-orange-500 transition">محصولات</a>
              </li>
              <li>
                <a href="/cart" className="hover:text-orange-500 transition">سبد خرید</a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-500 transition">درباره ما</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-500 transition">تماس با ما</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">دسته‌بندی‌ها</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition">لپ‌تاپ</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">گوشی موبایل</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">تبلت</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">دوربین</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">لوازم جانبی</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">ارتباط با ما</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 mt-0.5 shrink-0">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>info@techgear.ir</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <p>
            © ۱۴۰۵ TechGear. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition">قوانین و مقررات</a>
            <a href="#" className="hover:text-orange-500 transition">حریم خصوصی</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;