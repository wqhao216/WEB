import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

const navLinks = [
  { label: 'Trang Chủ', to: '/' },
  { label: 'Sản Phẩm', to: '/san-pham' },
  { label: 'Dịch Vụ', to: '/dich-vu' },
  { label: 'Dự Án', to: '/du-an' },
  { label: 'Blog', to: '/blog' },
  { label: 'Về Chúng Tôi', to: '/ve-chung-toi' },
  { label: 'Liên Hệ', to: '/lien-he' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, setIsOpen } = useCart()
  const { pathname } = useLocation()

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        {/* Top bar */}
        <div className="bg-walnut text-white text-xs text-center py-2 px-4">
          Miễn phí vận chuyển toàn quốc cho đơn hàng từ 5 triệu đồng &nbsp;·&nbsp; Tư vấn miễn phí: 1800 1234
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-1">
            <span className="text-2xl tracking-tight font-serif text-walnut font-semibold">HOME</span>
            <span className="text-2xl tracking-tight font-serif text-gray-800 font-light">WOOD</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`text-sm tracking-wide transition-colors ${
                    pathname === link.to
                      ? 'text-walnut font-medium'
                      : 'text-gray-600 hover:text-walnut'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <Search className="w-5 h-5 text-gray-500 hover:text-walnut cursor-pointer transition-colors hidden sm:block" />
            <Heart className="w-5 h-5 text-gray-500 hover:text-walnut cursor-pointer transition-colors hidden sm:block" />
            <button
              onClick={() => setIsOpen(true)}
              className="relative"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-5 h-5 text-gray-600 hover:text-walnut transition-colors" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-walnut text-white text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`text-sm py-1 ${pathname === link.to ? 'text-walnut font-medium' : 'text-gray-600'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <CartDrawer />
    </>
  )
}
