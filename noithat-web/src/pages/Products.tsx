import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, Grid3x3, List, X } from 'lucide-react'
import { products, categories } from '../data/products'
import { useCart } from '../context/CartContext'

function fmt(n: number) { return n.toLocaleString('vi-VN') + '₫' }

const sortOptions = [
  { value: 'featured', label: 'Nổi Bật' },
  { value: 'newest', label: 'Mới Nhất' },
  { value: 'price-asc', label: 'Giá Thấp → Cao' },
  { value: 'price-desc', label: 'Giá Cao → Thấp' },
  { value: 'rating', label: 'Đánh Giá Cao' },
]

const priceRanges = [
  { label: 'Dưới 5 triệu', min: 0, max: 5000000 },
  { label: '5 – 10 triệu', min: 5000000, max: 10000000 },
  { label: '10 – 20 triệu', min: 10000000, max: 20000000 },
  { label: 'Trên 20 triệu', min: 20000000, max: Infinity },
]

export default function Products() {
  const [params] = useSearchParams()
  const initCat = params.get('cat') || 'Tất Cả'

  const [activeCategory, setActiveCategory] = useState(initCat)
  const [sort, setSort] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState<number | null>(null)
  const [showFilter, setShowFilter] = useState(false)
  const { addItem } = useCart()

  const filtered = useMemo(() => {
    let list = activeCategory === 'Tất Cả' ? products : products.filter(p => p.category === activeCategory)
    if (priceRange !== null) {
      const r = priceRanges[priceRange]
      list = list.filter(p => p.price >= r.min && p.price < r.max)
    }
    switch (sort) {
      case 'price-asc': return [...list].sort((a, b) => a.price - b.price)
      case 'price-desc': return [...list].sort((a, b) => b.price - a.price)
      case 'rating': return [...list].sort((a, b) => b.rating - a.rating)
      case 'newest': return [...list].reverse()
      default: return list
    }
  }, [activeCategory, sort, priceRange])

  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <div className="bg-walnut-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-secondary text-xs uppercase tracking-widest mb-2">Bộ Sưu Tập</p>
          <h1 className="font-serif text-4xl font-light text-gray-900">Sản Phẩm</h1>
          <p className="text-secondary text-sm mt-2">{filtered.length} sản phẩm</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-colors ${
                activeCategory === cat
                  ? 'bg-walnut text-white'
                  : 'border border-gray-200 text-gray-600 hover:border-walnut hover:text-walnut'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 px-4 py-2 rounded-lg hover:border-walnut hover:text-walnut transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Bộ Lọc
            {priceRange !== null && <span className="bg-walnut text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>}
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-walnut"
            >
              {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-walnut text-white' : 'text-gray-500 hover:text-walnut'}`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-walnut text-white' : 'text-gray-500 hover:text-walnut'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter panel */}
        {showFilter && (
          <div className="bg-walnut-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900 text-sm">Lọc theo giá</h3>
              {priceRange !== null && (
                <button onClick={() => setPriceRange(null)} className="text-xs text-walnut flex items-center gap-1">
                  <X className="w-3 h-3" /> Xóa bộ lọc
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              {priceRanges.map((r, i) => (
                <button
                  key={r.label}
                  onClick={() => setPriceRange(priceRange === i ? null : i)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    priceRange === i ? 'bg-walnut text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-walnut'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Products */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(product => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-xl mb-3 aspect-square bg-gray-50">
                  <Link to={`/san-pham/${product.id}`}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  {product.badge && (
                    <span className={`absolute top-3 left-3 text-xs px-2.5 py-1 rounded-md font-medium ${
                      product.badge === 'Sale' ? 'bg-warm text-warm-text' : 'bg-walnut text-white'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <p className="text-secondary text-xs mb-1">{product.category}</p>
                <Link to={`/san-pham/${product.id}`}>
                  <h3 className="text-gray-900 text-sm font-medium hover:text-walnut transition-colors leading-snug mb-1.5">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'}`} />
                  ))}
                  <span className="text-xs text-secondary ml-1">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">{fmt(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-secondary text-xs line-through ml-2">{fmt(product.originalPrice)}</span>
                    )}
                  </div>
                  <button
                    onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0] })}
                    className="text-xs bg-walnut text-white px-3 py-1.5 rounded-lg hover:bg-walnut-dark transition-colors"
                  >
                    + Giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map(product => (
              <div key={product.id} className="flex gap-6 bg-white border border-gray-100 rounded-xl p-5 hover:border-walnut/30 transition-colors">
                <Link to={`/san-pham/${product.id}`} className="flex-shrink-0">
                  <img src={product.images[0]} alt={product.name} className="w-36 h-36 object-cover rounded-lg" />
                </Link>
                <div className="flex-1 min-w-0">
                  <p className="text-secondary text-xs mb-1">{product.category} · {product.style.join(', ')}</p>
                  <Link to={`/san-pham/${product.id}`}>
                    <h3 className="font-medium text-gray-900 hover:text-walnut transition-colors mb-2">{product.name}</h3>
                  </Link>
                  <p className="text-secondary text-sm leading-relaxed line-clamp-2 mb-3">{product.description}</p>
                  <p className="text-xs text-secondary">Kích thước: {product.dimensions} · Chất liệu: {product.material}</p>
                </div>
                <div className="flex-shrink-0 flex flex-col items-end justify-between">
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{fmt(product.price)}</div>
                    {product.originalPrice && <div className="text-xs text-secondary line-through">{fmt(product.originalPrice)}</div>}
                  </div>
                  <button
                    onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0] })}
                    className="bg-walnut text-white px-5 py-2 rounded-lg text-sm hover:bg-walnut-dark transition-colors"
                  >
                    Thêm Vào Giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-secondary">
            <p className="text-lg mb-2">Không tìm thấy sản phẩm</p>
            <button onClick={() => { setActiveCategory('Tất Cả'); setPriceRange(null) }} className="text-sm text-walnut underline underline-offset-4">
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
