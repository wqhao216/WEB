import { useState } from 'react'
import { Clock, ArrowRight } from 'lucide-react'
import { blogs } from '../data/blogs'

const blogCategories = ['Tất Cả', 'Xu Hướng Nội Thất', 'Bí Quyết Trang Trí', 'Hướng Dẫn Chọn Vật Liệu', 'Ý Tưởng Theo Diện Tích']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Tất Cả')

  const filtered = activeCategory === 'Tất Cả'
    ? blogs
    : blogs.filter(b => b.category === activeCategory)

  const [featured, ...rest] = filtered

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-walnut-50 border-b border-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-secondary text-xs uppercase tracking-widest mb-3">Cảm Hứng & Kiến Thức</p>
          <h1 className="font-serif text-4xl font-light text-gray-900">Blog & Cảm Hứng</h1>
          <p className="text-secondary text-sm mt-2 max-w-md">
            Xu hướng nội thất, bí quyết trang trí và hướng dẫn chọn vật liệu từ đội ngũ kiến trúc sư HOMEWOOD.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {blogCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs transition-colors ${
                activeCategory === cat
                  ? 'bg-walnut text-white'
                  : 'border border-gray-200 text-gray-600 hover:border-walnut hover:text-walnut'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {featured && (
          <div className="group grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 cursor-pointer">
            <div className="overflow-hidden rounded-2xl aspect-[16/10]">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-walnut text-white px-3 py-1 rounded-full">Nổi Bật</span>
                <span className="text-xs text-secondary bg-walnut-50 px-3 py-1 rounded-full">{featured.category}</span>
              </div>
              <h2 className="font-serif text-3xl font-light text-gray-900 leading-snug mb-4 group-hover:text-walnut transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-secondary mb-6">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime} đọc</span>
                <span>{featured.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-walnut group/link">
                <span>Đọc bài viết</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map(post => (
              <div key={post.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4 aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-walnut bg-walnut-50 px-2.5 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-secondary flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm leading-snug group-hover:text-walnut transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-secondary text-xs leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary">{post.date}</span>
                    <span className="text-xs text-walnut flex items-center gap-1">
                      Đọc thêm <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter */}
      <div className="bg-walnut py-16 px-6 text-center text-white">
        <h2 className="font-serif text-3xl font-light mb-2">Không Bỏ Lỡ Bài Viết Nào</h2>
        <p className="text-white/70 text-sm mb-7">Đăng ký nhận bản tin — và nhận ngay voucher 5% cho đơn hàng đầu tiên</p>
        <form className="flex gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email của bạn"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm px-5 py-3 rounded-lg focus:outline-none focus:border-white/60"
          />
          <button
            type="submit"
            className="bg-white text-walnut px-6 py-3 rounded-lg text-sm font-medium hover:bg-walnut-50 transition-colors whitespace-nowrap"
          >
            Đăng Ký
          </button>
        </form>
      </div>
    </div>
  )
}
