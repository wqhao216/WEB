import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronRight, Minus, Plus, Heart, Truck, Shield, RotateCcw } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

function fmt(n: number) { return n.toLocaleString('vi-VN') + '₫' }

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [selectedColor, setSelectedColor] = useState(0)
  const [activeImg, setActiveImg] = useState(0)
  const [wishlist, setWishlist] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Không tìm thấy sản phẩm</p>
          <Link to="/san-pham" className="text-walnut underline">Quay lại</Link>
        </div>
      </div>
    )
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-xs text-secondary">
          <Link to="/" className="hover:text-walnut">Trang Chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/san-pham" className="hover:text-walnut">Sản Phẩm</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/san-pham?cat=${product.category}`} className="hover:text-walnut">{product.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-700 truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Images */}
          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl aspect-square bg-gray-50">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-20 h-20 overflow-hidden rounded-xl border-2 transition-colors ${
                      activeImg === i ? 'border-walnut' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-secondary text-xs uppercase tracking-wide mb-2">{product.category}</p>
                {product.badge && (
                  <span className={`text-xs px-2.5 py-1 rounded-md font-medium mr-2 ${
                    product.badge === 'Sale' ? 'bg-warm text-warm-text' : 'bg-walnut text-white'
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <button onClick={() => setWishlist(!wishlist)} className="p-2 rounded-full border border-gray-200 hover:border-red-300">
                <Heart className={`w-5 h-5 ${wishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>
            </div>

            <h1 className="font-serif text-3xl font-light text-gray-900 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-700 font-medium">{product.rating}</span>
              <span className="text-secondary text-sm">({product.reviews} đánh giá)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-semibold text-gray-900">{fmt(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-secondary text-lg line-through">{fmt(product.originalPrice)}</span>
                  <span className="bg-warm text-warm-text text-xs px-2 py-0.5 rounded">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>

            {/* Specs */}
            <div className="bg-walnut-50 rounded-xl p-4 mb-6 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-secondary text-xs">Chất liệu</p>
                <p className="text-gray-900 font-medium mt-0.5">{product.material}</p>
              </div>
              <div>
                <p className="text-secondary text-xs">Kích thước</p>
                <p className="text-gray-900 font-medium mt-0.5">{product.dimensions}</p>
              </div>
              <div>
                <p className="text-secondary text-xs">Xuất xứ</p>
                <p className="text-gray-900 font-medium mt-0.5">{product.origin}</p>
              </div>
              <div>
                <p className="text-secondary text-xs">Phong cách</p>
                <p className="text-gray-900 font-medium mt-0.5">{product.style.join(', ')}</p>
              </div>
            </div>

            {/* Colors */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-900 mb-3">Màu sắc / Chất liệu gỗ: <span className="font-normal text-secondary">{product.colors[selectedColor]}</span></p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(i)}
                      className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                        selectedColor === i ? 'border-walnut text-walnut bg-walnut-50' : 'border-gray-200 text-gray-600 hover:border-walnut'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Qty + CTA */}
            <div className="flex gap-3 mb-6">
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-3 hover:text-walnut transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="px-4 py-3 hover:text-walnut transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => { addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0], variant: product.colors[selectedColor] }) }}
                className="flex-1 bg-walnut text-white py-3 rounded-lg font-medium text-sm hover:bg-walnut-dark transition-colors"
              >
                Thêm Vào Giỏ
              </button>
            </div>
            <button className="w-full border-2 border-walnut text-walnut py-3 rounded-lg font-medium text-sm hover:bg-walnut-50 transition-colors mb-8">
              Mua Ngay
            </button>

            {/* Policies */}
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { Icon: Truck, label: 'Miễn phí\nlắp đặt' },
                { Icon: Shield, label: 'Bảo hành\n2-5 năm' },
                { Icon: RotateCcw, label: 'Đổi trả\n30 ngày' },
              ].map(({ Icon, label }) => (
                <div key={label} className="bg-walnut-50 rounded-xl p-3 flex flex-col items-center gap-2">
                  <Icon className="w-5 h-5 text-walnut" />
                  <p className="text-xs text-gray-700 leading-tight whitespace-pre-line">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl font-light text-gray-900 mb-8">Hoàn Thiện Căn Phòng Của Bạn</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map(p => (
                <Link key={p.id} to={`/san-pham/${p.id}`} className="group">
                  <div className="overflow-hidden rounded-xl mb-3 aspect-square bg-gray-50">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-walnut transition-colors">{p.name}</h3>
                  <p className="text-sm text-walnut mt-1">{fmt(p.price)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
