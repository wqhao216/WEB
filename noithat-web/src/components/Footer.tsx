import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.47C18.88 4 12 4 12 4s-6.88 0-8.6.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.53C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
)

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-serif text-xl font-light italic mb-1">Nhận ngay voucher 5%</h3>
            <p className="text-sm text-gray-400">Đăng ký nhận bản tin và ưu đãi dành riêng cho thành viên</p>
          </div>
          <form className="flex gap-3 w-full max-w-md" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Địa chỉ email của bạn"
              className="flex-1 bg-gray-900 border border-gray-700 text-white placeholder:text-gray-500 text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-walnut-light"
            />
            <button
              type="submit"
              className="bg-walnut text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-walnut-dark transition-colors whitespace-nowrap"
            >
              Đăng Ký
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-xl font-serif font-semibold text-walnut-100">HOME</span>
            <span className="text-xl font-serif font-light text-white">WOOD</span>
          </div>
          <p className="text-sm leading-relaxed mb-5">
            Thương hiệu nội thất cao cấp phong cách Japandi. Mang đến không gian sống tinh tế, bền vững cho gia đình Việt.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: FacebookIcon, label: 'Facebook' },
              { Icon: InstagramIcon, label: 'Instagram' },
              { Icon: YoutubeIcon, label: 'Youtube' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 border border-gray-700 rounded-lg flex items-center justify-center hover:border-walnut hover:text-walnut-100 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-5">Sản Phẩm</h4>
          <ul className="space-y-3 text-sm">
            {['Phòng Khách', 'Phòng Ngủ', 'Phòng Bếp', 'Văn Phòng', 'Khuyến Mãi'].map(item => (
              <li key={item}>
                <Link to="/san-pham" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-5">Dịch Vụ</h4>
          <ul className="space-y-3 text-sm">
            {[
              ['Tư Vấn & Thiết Kế', '/dich-vu'],
              ['Thi Công Lắp Đặt', '/dich-vu'],
              ['Gói Trọn Phòng', '/dich-vu'],
              ['Dịch Vụ B2B', '/dich-vu'],
              ['Bảo Hành & Bảo Trì', '/dich-vu'],
            ].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-5">Liên Hệ</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-walnut-100 flex-shrink-0" />
              <span>1800 1234 (Miễn phí)</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-walnut-100 flex-shrink-0" />
              <span>hello@homewood.vn</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-walnut-100 flex-shrink-0 mt-0.5" />
              <span>123 Nguyễn Huệ, Q.1, TP.HCM<br />Showroom: T2–CN, 9:00–21:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2026 HOMEWOOD. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Chính Sách Bảo Mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều Khoản Sử Dụng</a>
            <a href="#" className="hover:text-white transition-colors">Chính Sách Đổi Trả</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
