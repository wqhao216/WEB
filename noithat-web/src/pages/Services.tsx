import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { services } from '../data/services'

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-walnut text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Trải Nghiệm Hoàn Chỉnh</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Dịch Vụ Tích Hợp</h1>
          <p className="text-white/70 max-w-lg text-sm leading-relaxed">
            Không chỉ bán sản phẩm — chúng tôi cung cấp giải pháp nội thất toàn diện từ tư vấn thiết kế đến lắp đặt và bảo hành lâu dài.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {services.map((service, i) => (
          <div
            key={service.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="text-3xl text-walnut mb-4">{service.icon}</div>
              <h2 className="font-serif text-3xl font-light text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-walnut mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-walnut-50 rounded-xl p-4 mb-6">
                <p className="text-xs text-secondary uppercase tracking-wide mb-1">Tham Khảo Giá</p>
                <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{service.price}</p>
              </div>

              <Link
                to="/lien-he"
                className="bg-walnut text-white px-7 py-3 rounded-lg text-sm font-medium hover:bg-walnut-dark transition-colors inline-flex items-center gap-2"
              >
                Đăng Ký Tư Vấn <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-walnut-50 py-16 px-6 text-center">
        <h2 className="font-serif text-3xl font-light text-gray-900 mb-3">Không Biết Bắt Đầu Từ Đâu?</h2>
        <p className="text-secondary text-sm mb-7 max-w-md mx-auto">
          Để lại thông tin — đội ngũ của chúng tôi sẽ liên hệ trong vòng 2 giờ để tư vấn miễn phí.
        </p>
        <Link
          to="/lien-he"
          className="bg-walnut text-white px-10 py-4 rounded-lg font-medium text-sm hover:bg-walnut-dark transition-colors inline-block"
        >
          Nhận Tư Vấn Miễn Phí
        </Link>
      </div>
    </div>
  )
}
