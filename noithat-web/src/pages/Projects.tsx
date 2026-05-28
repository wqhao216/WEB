import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Maximize2 } from 'lucide-react'
import { projects } from '../data/projects'

const types = ['Tất Cả', 'Căn hộ', 'Nhà phố', 'Văn phòng', 'Khách sạn', 'Penthouse']

export default function Projects() {
  const [filter, setFilter] = useState('Tất Cả')
  const [showAfter, setShowAfter] = useState<Record<number, boolean>>({})

  const filtered = filter === 'Tất Cả' ? projects : projects.filter(p => p.type === filter)

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div
        className="relative py-24 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1E3329 0%, #2D4A3E 100%)' }}
      >
        <div className="max-w-7xl mx-auto relative">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Portfolio</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">Dự Án Thực Tế</h1>
          <p className="text-white/60 max-w-lg text-sm leading-relaxed">
            Những không gian đã được chúng tôi biến đổi. Xem kết quả thực tế để cảm nhận chất lượng thi công và thiết kế của HOMEWOOD.
          </p>
          <div className="flex gap-8 mt-10">
            {[['100+', 'Dự án'], ['500+', 'Khách hàng'], ['10', 'Năm kinh nghiệm']].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-serif font-light text-white">{n}</div>
                <div className="text-xs text-white/50">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {types.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-full text-sm transition-colors ${
                filter === t ? 'bg-walnut text-white' : 'border border-gray-200 text-gray-600 hover:border-walnut hover:text-walnut'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(project => (
            <div key={project.id} className="group">
              {/* Before/After toggle */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                <img
                  src={showAfter[project.id] ? project.after : project.before}
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <button
                    onClick={() => setShowAfter(s => ({ ...s, [project.id]: false }))}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                      !showAfter[project.id] ? 'bg-white text-gray-900' : 'bg-black/30 text-white hover:bg-black/50'
                    }`}
                  >
                    Trước
                  </button>
                  <button
                    onClick={() => setShowAfter(s => ({ ...s, [project.id]: true }))}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                      showAfter[project.id] ? 'bg-white text-gray-900' : 'bg-black/30 text-white hover:bg-black/50'
                    }`}
                  >
                    Sau
                  </button>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-walnut text-white text-xs px-2.5 py-1 rounded-full">{project.style}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-secondary text-xs mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{project.location}</span>
                  <span>·</span>
                  <Maximize2 className="w-3 h-3" />
                  <span>{project.area}</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{project.title}</h3>
                <p className="text-secondary text-xs leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                <div className="flex gap-4 text-xs text-secondary border-t border-gray-100 pt-3">
                  <div>
                    <span className="text-gray-900 font-medium">{project.budget}</span>
                    <span className="text-secondary ml-1">ngân sách</span>
                  </div>
                  <div>
                    <span className="text-gray-900 font-medium">{project.duration}</span>
                    <span className="text-secondary ml-1">thi công</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-walnut text-white py-16 px-6 text-center mt-12">
        <h2 className="font-serif text-3xl font-light mb-3">Tôi Muốn Không Gian Tương Tự</h2>
        <p className="text-white/70 text-sm mb-7">Liên hệ ngay để nhận báo giá thiết kế và thi công phù hợp với không gian của bạn</p>
        <Link
          to="/lien-he"
          className="bg-white text-walnut px-10 py-4 rounded-lg font-medium text-sm hover:bg-walnut-50 transition-colors inline-flex items-center gap-2"
        >
          Nhận Báo Giá <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
