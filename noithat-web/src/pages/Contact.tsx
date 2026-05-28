import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'

const needTypes = ['Mua lẻ', 'Dự án B2B', 'Tư vấn thiết kế', 'Báo giá', 'Khác']

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', need: '', message: '', date: '', time: '' })
  const [submitted, setSubmitted] = useState(false)
  const [tab, setTab] = useState<'contact' | 'appointment'>('contact')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-walnut text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Kết Nối Với Chúng Tôi</p>
          <h1 className="font-serif text-4xl font-light">Liên Hệ</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-light text-gray-900 mb-6">Thông Tin Liên Hệ</h2>
              <div className="space-y-5">
                {[
                  { Icon: Phone, title: 'Hotline', value: '1800 1234 (Miễn phí)', sub: 'Thứ 2 – Chủ Nhật, 9:00 – 21:00' },
                  { Icon: Mail, title: 'Email', value: 'hello@homewood.vn', sub: 'Phản hồi trong vòng 2 giờ' },
                  { Icon: MapPin, title: 'Showroom', value: '123 Nguyễn Huệ, Q.1, TP.HCM', sub: 'Mở cửa T2–CN, 9:00–21:00' },
                  { Icon: Clock, title: 'Giờ Mở Cửa', value: 'Thứ 2 – Chủ Nhật', sub: '9:00 – 21:00 (Bao gồm lễ)' },
                ].map(({ Icon, title, value, sub }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-walnut-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-walnut" />
                    </div>
                    <div>
                      <p className="text-xs text-secondary">{title}</p>
                      <p className="text-sm font-medium text-gray-900">{value}</p>
                      <p className="text-xs text-secondary mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-52 bg-walnut-50 flex items-center justify-center border border-gray-100">
              <div className="text-center text-secondary">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-walnut" />
                <p className="text-sm">Google Maps</p>
                <p className="text-xs">123 Nguyễn Huệ, Q.1, TP.HCM</p>
              </div>
            </div>

            {/* Zalo / Messenger */}
            <div className="space-y-3">
              <p className="text-xs text-secondary uppercase tracking-wide">Liên hệ trực tiếp</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:border-walnut hover:text-walnut transition-colors"
                >
                  <span className="text-blue-500">Z</span> Zalo OA
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:border-walnut hover:text-walnut transition-colors"
                >
                  <span className="text-blue-600">f</span> Messenger
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="flex border-b border-gray-100 mb-8">
              {[
                { key: 'contact', label: 'Gửi Yêu Cầu' },
                { key: 'appointment', label: 'Đặt Lịch Tư Vấn Tại Nhà' },
              ].map(t => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key as typeof tab)}
                  className={`pb-3 mr-6 text-sm font-medium border-b-2 transition-colors ${
                    tab === t.key ? 'border-walnut text-walnut' : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <CheckCircle2 className="w-16 h-16 text-walnut mb-4" />
                <h3 className="font-serif text-2xl font-light text-gray-900 mb-2">Cảm ơn bạn!</h3>
                <p className="text-secondary text-sm max-w-xs">
                  Chúng tôi đã nhận được thông tin và sẽ liên hệ lại trong vòng 2 giờ.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-walnut underline underline-offset-4"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-secondary block mb-1.5">Họ và tên *</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Nguyễn Văn A"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-walnut"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-secondary block mb-1.5">Số điện thoại *</label>
                    <input
                      required
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="0901 234 567"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-walnut"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-secondary block mb-1.5">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="email@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-walnut"
                  />
                </div>

                <div>
                  <label className="text-xs text-secondary block mb-1.5">Loại nhu cầu *</label>
                  <div className="flex flex-wrap gap-2">
                    {needTypes.map(n => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, need: n }))}
                        className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                          form.need === n ? 'bg-walnut text-white border-walnut' : 'border-gray-200 text-gray-600 hover:border-walnut'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                {tab === 'appointment' && (
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-secondary block mb-1.5">Ngày tư vấn *</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-walnut"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-secondary block mb-1.5">Giờ tư vấn *</label>
                      <select
                        value={form.time}
                        onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-walnut"
                      >
                        <option value="">Chọn giờ</option>
                        {['9:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-xs text-secondary block mb-1.5">Nội dung / Ghi chú</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Mô tả không gian, phong cách mong muốn, ngân sách tham khảo..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-walnut resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-walnut text-white py-4 rounded-lg font-medium text-sm hover:bg-walnut-dark transition-colors"
                >
                  {tab === 'appointment' ? 'Đặt Lịch Tư Vấn' : 'Gửi Yêu Cầu'}
                </button>
                <p className="text-xs text-secondary text-center">
                  Chúng tôi sẽ liên hệ lại trong vòng 2 giờ trong giờ hành chính
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
