import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ChevronLeft, ChevronRight, Shield, Truck, Wrench, Award } from 'lucide-react'
import { products } from '../data/products'
import { blogs } from '../data/blogs'
import { projects } from '../data/projects'
import { useCart } from '../context/CartContext'

function fmt(n: number) { return n.toLocaleString('vi-VN') + '₫' }

const testimonials = [
  { name: 'Chị Minh Anh', location: 'TP. Hồ Chí Minh', rating: 5, text: 'Nội thất HOMEWOOD vượt xa kỳ vọng của mình. Gỗ thật sự chất lượng, lắp đặt chuyên nghiệp và đúng hẹn. Căn phòng khách nhà mình giờ đẹp như trong tạp chí!', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face' },
  { name: 'Anh Quốc Bảo', location: 'Hà Nội', rating: 5, text: 'Đã mua bàn làm việc Walnut Studio dùng 6 tháng, không có gì để chê. Chất gỗ đẹp, bề mặt bền, kết cấu vững chắc. Sẽ tiếp tục ủng hộ HOMEWOOD.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
  { name: 'Chị Thu Hà', location: 'Đà Nẵng', rating: 5, text: 'Dịch vụ tư vấn thiết kế rất tận tâm. Đội ngũ lắng nghe ý kiến và đưa ra giải pháp phù hợp với không gian và ngân sách. Rất hài lòng!', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face' },
]

const categories = [
  { label: 'Phòng Khách', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop', to: '/san-pham?cat=Phòng Khách' },
  { label: 'Phòng Ngủ', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&h=400&fit=crop', to: '/san-pham?cat=Phòng Ngủ' },
  { label: 'Bếp & Gia Dụng', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop', to: '/san-pham?cat=Phòng Bếp' },
  { label: 'Văn Phòng', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=400&fit=crop', to: '/san-pham?cat=Văn Phòng' },
]

const features = [
  { Icon: Shield, title: 'Chất Liệu Chuẩn', desc: 'Gỗ tự nhiên được kiểm định chất lượng, an toàn cho sức khỏe gia đình' },
  { Icon: Award, title: 'Thiết Kế Riêng', desc: 'Đội ngũ kiến trúc sư tư vấn và thiết kế theo không gian thực tế của bạn' },
  { Icon: Truck, title: 'Lắp Đặt Tận Nơi', desc: 'Giao hàng và lắp đặt miễn phí trong vòng bán kính 50km' },
  { Icon: Wrench, title: 'Bảo Hành 5 Năm', desc: 'Cam kết bảo hành dài hạn, hỗ trợ bảo trì định kỳ theo yêu cầu' },
]

export default function Home() {
  const { addItem } = useCart()
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const featured = products.filter(p => p.badge === 'Bán Chạy' || p.badge === 'Mới').slice(0, 8)

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1920&h=1080&fit=crop"
          alt="HOMEWOOD Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <p className="text-white/70 text-xs uppercase tracking-[0.3em] mb-5">Bộ Sưu Tập 2026</p>
            <h1 className="font-serif text-white text-5xl md:text-7xl font-light leading-none mb-6">
              Không Gian<br />
              <em>Tinh Tế &</em><br />
              Bền Vững
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed max-w-sm">
              Nội thất phong cách Japandi — tối giản, ấm áp, và đẳng cấp cho ngôi nhà của bạn.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/san-pham"
                className="bg-walnut text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-walnut-dark transition-colors inline-flex items-center gap-2"
              >
                Khám Phá Sản Phẩm <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/lien-he"
                className="border border-white/50 text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Tư Vấn Miễn Phí
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white/40 animate-pulse" />
          <p className="text-white/40 text-xs tracking-widest">SCROLL</p>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-secondary text-xs uppercase tracking-widest mb-2">Khám Phá</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900">Danh Mục Nổi Bật</h2>
          </div>
          <Link to="/san-pham" className="text-sm text-walnut flex items-center gap-1 hover:gap-2 transition-all">
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.label}
              to={cat.to}
              className="group relative overflow-hidden rounded-xl aspect-[3/4]"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-medium text-base">{cat.label}</h3>
                <p className="text-white/60 text-xs mt-1 flex items-center gap-1">
                  Khám phá <ArrowRight className="w-3 h-3" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-walnut-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-walnut/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-walnut" />
                </div>
                <h3 className="font-medium text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-secondary text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Sellers ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-secondary text-xs uppercase tracking-widest mb-2">Được Yêu Thích</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900">Sản Phẩm Bán Chạy</h2>
          </div>
          <Link to="/san-pham" className="text-sm text-walnut flex items-center gap-1 hover:gap-2 transition-all">
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map(product => (
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
              <div>
                <p className="text-secondary text-xs mb-1">{product.category}</p>
                <Link to={`/san-pham/${product.id}`}>
                  <h3 className="text-gray-900 text-sm font-medium hover:text-walnut transition-colors leading-snug mb-2">
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
            </div>
          ))}
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="bg-gray-950 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-walnut-100/60 text-xs uppercase tracking-widest mb-3">Không Chỉ Bán Hàng</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">Dịch Vụ Tích Hợp</h2>
            <p className="text-gray-400 mt-3 max-w-md mx-auto text-sm leading-relaxed">
              Từ tư vấn thiết kế đến lắp đặt và bảo hành — chúng tôi đồng hành cùng bạn ở mọi bước
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Tư Vấn & Thiết Kế', desc: 'Bản vẽ 2D/3D, tư vấn online miễn phí hoặc khảo sát tại nhà', icon: '✦' },
              { title: 'Gói Nội Thất Trọn Phòng', desc: 'Combo theo phong cách Japandi / Bắc Âu / Hiện Đại, tiết kiệm chi phí', icon: '◇' },
              { title: 'Dịch Vụ B2B', desc: 'Báo giá sỉ cho văn phòng, khách sạn, căn hộ dự án — hóa đơn VAT', icon: '⬡' },
            ].map(s => (
              <div key={s.title} className="border border-gray-800 rounded-xl p-8 hover:border-walnut transition-colors group">
                <div className="text-2xl text-walnut mb-5">{s.icon}</div>
                <h3 className="font-medium text-white mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <Link
                  to="/dich-vu"
                  className="text-sm text-walnut-100 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Tìm hiểu thêm <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/dich-vu"
              className="border border-gray-700 text-gray-300 px-8 py-3 rounded-lg text-sm hover:border-walnut hover:text-walnut-100 transition-colors inline-block"
            >
              Xem Tất Cả 6 Dịch Vụ
            </Link>
          </div>
        </div>
      </section>

      {/* ── Projects showcase ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-secondary text-xs uppercase tracking-widest mb-2">Thực Tế</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900">Dự Án Đã Thực Hiện</h2>
          </div>
          <Link to="/du-an" className="text-sm text-walnut flex items-center gap-1 hover:gap-2 transition-all">
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.slice(0, 3).map(project => (
            <Link
              key={project.id}
              to="/du-an"
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={project.after}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white/60 text-xs mb-1">{project.type} · {project.area}</p>
                <h3 className="text-white font-medium">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-walnut-50 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-secondary text-xs uppercase tracking-widest mb-3">Khách Hàng Nói Gì</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900 mb-12">Đánh Giá Thực Tế</h2>

          <div className="relative bg-white rounded-2xl p-10 shadow-sm">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-gray-700 text-base leading-relaxed italic font-serif mb-8">
              "{testimonials[testimonialIdx].text}"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <img
                src={testimonials[testimonialIdx].avatar}
                alt={testimonials[testimonialIdx].name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">{testimonials[testimonialIdx].name}</p>
                <p className="text-xs text-secondary">{testimonials[testimonialIdx].location}</p>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setTestimonialIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
                className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:border-walnut hover:text-walnut transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === testimonialIdx ? 'bg-walnut w-6' : 'bg-gray-300'}`}
                />
              ))}
              <button
                onClick={() => setTestimonialIdx(i => (i + 1) % testimonials.length)}
                className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:border-walnut hover:text-walnut transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-secondary text-xs uppercase tracking-widest mb-2">Cảm Hứng</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900">Blog Mới Nhất</h2>
          </div>
          <Link to="/blog" className="text-sm text-walnut flex items-center gap-1 hover:gap-2 transition-all">
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map(post => (
            <Link key={post.id} to="/blog" className="group">
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
                  <span className="text-xs text-secondary">{post.readTime} đọc</span>
                </div>
                <h3 className="font-medium text-gray-900 text-sm leading-snug group-hover:text-walnut transition-colors">
                  {post.title}
                </h3>
                <p className="text-secondary text-xs mt-2 leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-6 mb-20 rounded-2xl overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&h=400&fit=crop"
          alt="HOMEWOOD Showroom"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-walnut/80 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">Đặt Lịch Tư Vấn Miễn Phí</h2>
            <p className="text-white/75 text-sm mb-7">Kiến trúc sư của chúng tôi sẵn sàng đến tận nhà để khảo sát và tư vấn</p>
            <Link
              to="/lien-he"
              className="bg-white text-walnut px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-walnut-50 transition-colors inline-block"
            >
              Đặt Lịch Ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
