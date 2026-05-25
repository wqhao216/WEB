import { useState } from 'react'
import { ShoppingCart, Search, Menu, X, Star, ChevronRight, Phone, Mail, MapPin, Heart } from 'lucide-react'
import './index.css'

const products = [
  { id: 1, name: 'Sofa Bắc Âu Alto', price: 12500000, originalPrice: 15000000, rating: 4.8, reviews: 124, category: 'Phòng khách', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop', badge: 'Bán chạy' },
  { id: 2, name: 'Bàn ăn gỗ sồi 6 ghế', price: 8900000, originalPrice: 11000000, rating: 4.6, reviews: 89, category: 'Phòng ăn', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop', badge: 'Giảm 19%' },
  { id: 3, name: 'Giường ngủ Zen', price: 6200000, originalPrice: 7500000, rating: 4.9, reviews: 201, category: 'Phòng ngủ', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop', badge: 'Mới' },
  { id: 4, name: 'Kệ sách gỗ walnut', price: 3400000, originalPrice: 4200000, rating: 4.7, reviews: 67, category: 'Văn phòng', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=300&fit=crop', badge: null },
  { id: 5, name: 'Ghế thư giãn Loft', price: 4100000, originalPrice: 5000000, rating: 4.5, reviews: 43, category: 'Phòng khách', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop', badge: null },
  { id: 6, name: 'Tủ quần áo trượt', price: 9800000, originalPrice: 12000000, rating: 4.8, reviews: 156, category: 'Phòng ngủ', image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400&h=300&fit=crop', badge: 'Hot' },
]

const categories = ['Tất cả', 'Phòng khách', 'Phòng ngủ', 'Phòng ăn', 'Văn phòng']

function formatPrice(price: number) {
  return price.toLocaleString('vi-VN') + '₫'
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Tất cả')
  const [cartCount, setCartCount] = useState(0)
  const [wishlist, setWishlist] = useState<number[]>([])
  const [menuOpen, setMenuOpen] = useState(false)

  const filtered = activeCategory === 'Tất cả'
    ? products
    : products.filter(p => p.category === activeCategory)

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-amber-700">Nội Thất</span>
            <span className="text-2xl font-light text-gray-500">Việt</span>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {['Trang chủ', 'Sản phẩm', 'Khuyến mãi', 'Về chúng tôi', 'Liên hệ'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-amber-700 transition-colors">{item}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-amber-700 transition-colors" />
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-gray-500 hover:text-amber-700 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{cartCount}</span>
              )}
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-600 bg-white">
            {['Trang chủ', 'Sản phẩm', 'Khuyến mãi', 'Về chúng tôi', 'Liên hệ'].map(item => (
              <a key={item} href="#" className="hover:text-amber-700">{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-3">Bộ sưu tập 2026</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Không gian sống<br />
              <span className="text-amber-700">tinh tế & hiện đại</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto md:mx-0">
              Khám phá bộ sưu tập nội thất cao cấp, thiết kế bền đẹp cho ngôi nhà của bạn.
            </p>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <button className="bg-amber-700 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-800 transition-colors flex items-center gap-2">
                Khám phá ngay <ChevronRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-full font-medium hover:bg-amber-50 transition-colors">
                Xem catalogue
              </button>
            </div>
            <div className="flex gap-8 mt-10 justify-center md:justify-start">
              {[['500+', 'Sản phẩm'], ['10K+', 'Khách hàng'], ['15', 'Năm kinh nghiệm']].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-amber-700">{num}</div>
                  <div className="text-xs text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop"
              alt="Nội thất hiện đại"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Category filter + Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sản phẩm nổi bật</h2>
          <p className="text-gray-500">Lựa chọn hàng đầu từ bộ sưu tập của chúng tôi</p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-3 flex-wrap justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-amber-700 text-white'
                  : 'bg-white text-gray-600 hover:bg-amber-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-amber-700 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {product.badge}
                  </span>
                )}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                  />
                </button>
              </div>

              <div className="p-5">
                <p className="text-xs text-amber-700 font-medium mb-1">{product.category}</p>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{product.name}</h3>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-amber-700">{formatPrice(product.price)}</span>
                  <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                </div>

                <button
                  onClick={() => setCartCount(c => c + 1)}
                  className="w-full bg-amber-700 text-white py-2.5 rounded-xl font-medium hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" /> Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-amber-700 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">Miễn phí vận chuyển toàn quốc</h2>
        <p className="text-amber-100 mb-6">Cho đơn hàng từ 5.000.000₫ — Lắp đặt tận nơi</p>
        <button className="bg-white text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors">
          Mua ngay
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-xl font-bold text-amber-500">Nội Thất</span>
              <span className="text-xl text-white font-light">Việt</span>
            </div>
            <p className="text-sm leading-relaxed">Thương hiệu nội thất uy tín hàng đầu Việt Nam, mang đến không gian sống hoàn hảo cho gia đình bạn.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-sm">
              {['Phòng khách', 'Phòng ngủ', 'Phòng ăn', 'Văn phòng', 'Phụ kiện'].map(item => (
                <li key={item}><a href="#" className="hover:text-amber-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm">
              {['Chính sách đổi trả', 'Bảo hành', 'Hướng dẫn mua hàng', 'FAQ', 'Liên hệ'].map(item => (
                <li key={item}><a href="#" className="hover:text-amber-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-500" /> 1800 1234</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-amber-500" /> info@noithatviet.vn</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-amber-500 mt-0.5" /> 123 Nguyễn Huệ, Q.1, TP.HCM</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-xs">
          © 2026 Nội Thất Việt. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
