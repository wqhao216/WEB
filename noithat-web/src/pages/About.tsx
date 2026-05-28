import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const team = [
  { name: 'Nguyễn Minh Khôi', role: 'Founder & Head Designer', bio: '15 năm kinh nghiệm thiết kế nội thất cao cấp, học tại Đại học Kiến Trúc TP.HCM và thực tập tại Tokyo.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Trần Thị Lan Anh', role: 'Senior Interior Architect', bio: '10 năm tư vấn thiết kế cho các dự án căn hộ và biệt thự cao cấp tại TP.HCM và Hà Nội.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  { name: 'Lê Hoàng Phúc', role: 'Project Manager', bio: 'Quản lý hơn 80 dự án thi công, cam kết đúng tiến độ và chất lượng theo tiêu chuẩn quốc tế.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Phạm Thu Trang', role: 'Customer Experience Lead', bio: 'Đảm bảo mỗi khách hàng đều có trải nghiệm mua sắm và sử dụng dịch vụ tốt nhất từ HOMEWOOD.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
]

const stats = [
  { num: '100+', label: 'Dự Án Hoàn Thành' },
  { num: '500+', label: 'Khách Hàng Tin Tưởng' },
  { num: '10', label: 'Năm Kinh Nghiệm' },
  { num: '4.9★', label: 'Đánh Giá Trung Bình' },
]

const partners = [
  'Häfele', 'Blum', 'Hafnium Wood', 'Sadolin', 'OSRAM', 'Neltex'
]

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=600&fit=crop"
          alt="HOMEWOOD Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-walnut/70 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Câu Chuyện Của Chúng Tôi</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-white">Về HOMEWOOD</h1>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-secondary text-xs uppercase tracking-widest mb-3">Tại Sao Chúng Tôi Thành Lập</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Gỗ Tự Nhiên &<br /><em>Không Gian Sống Đẹp</em>
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                HOMEWOOD được thành lập năm 2014 với một niềm tin đơn giản: mỗi gia đình Việt đều xứng đáng có không gian sống đẹp, bền và ý nghĩa — không phụ thuộc vào ngân sách hay diện tích.
              </p>
              <p>
                Chúng tôi lấy cảm hứng từ triết lý Japandi — sự giao thoa giữa tinh thần tối giản Nhật Bản và sự ấm áp Bắc Âu. Mỗi sản phẩm được thiết kế với tư duy "ít mà tinh", ưu tiên chất liệu tự nhiên bền vững và đường nét đơn giản nhưng có chiều sâu.
              </p>
              <p>
                Sau 10 năm, chúng tôi tự hào đã hoàn thiện hơn 100 dự án nội thất, từ căn studio 30m² đến khách sạn boutique 20 phòng — mỗi không gian đều mang dấu ấn HOMEWOOD riêng biệt.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=700&h=500&fit=crop"
              alt="HOMEWOOD Showroom"
              className="rounded-2xl w-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-walnut text-white rounded-2xl p-5 shadow-lg">
              <p className="font-serif text-3xl font-light">10</p>
              <p className="text-xs text-white/70 mt-1">Năm kinh nghiệm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-walnut py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div className="font-serif text-4xl font-light text-white mb-2">{num}</div>
              <div className="text-white/60 text-xs uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-secondary text-xs uppercase tracking-widest mb-3">Điều Làm Nên Sự Khác Biệt</p>
          <h2 className="font-serif text-3xl font-light text-gray-900">Triết Lý Thiết Kế</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Chất Liệu Tự Nhiên', desc: 'Chúng tôi chỉ sử dụng gỗ tự nhiên được khai thác bền vững, có chứng nhận FSC. Không MDF rẻ tiền, không hóa chất độc hại.', num: '01' },
            { title: 'Thiết Kế Có Tâm', desc: 'Mỗi sản phẩm đi qua tay đội ngũ kiến trúc sư, thợ thủ công lành nghề. Chúng tôi không sản xuất đại trà — chất lượng luôn được đặt lên hàng đầu.', num: '02' },
            { title: 'Dịch Vụ Trọn Đời', desc: 'Mối quan hệ với khách hàng không kết thúc sau khi bán hàng. Chúng tôi đồng hành từ tư vấn đến bảo hành, bảo trì dài hạn.', num: '03' },
          ].map(v => (
            <div key={v.title} className="border border-gray-100 rounded-2xl p-8">
              <div className="font-serif text-6xl font-light text-walnut-100 mb-4">{v.num}</div>
              <h3 className="font-medium text-gray-900 mb-3">{v.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-walnut-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary text-xs uppercase tracking-widest mb-3">Con Người</p>
            <h2 className="font-serif text-3xl font-light text-gray-900">Đội Ngũ Của Chúng Tôi</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(member => (
              <div key={member.name} className="text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-medium text-gray-900 text-sm">{member.name}</h3>
                <p className="text-walnut text-xs mt-1 mb-2">{member.role}</p>
                <p className="text-secondary text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-secondary text-xs uppercase tracking-widest mb-8">Đối Tác & Chứng Nhận</p>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map(p => (
            <div key={p} className="border border-gray-100 px-8 py-4 rounded-xl text-gray-600 font-medium text-sm hover:border-walnut transition-colors">
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gray-950 text-white py-16 px-6 text-center">
        <h2 className="font-serif text-3xl font-light mb-3">Cùng Tạo Nên Không Gian Đẹp</h2>
        <p className="text-gray-400 text-sm mb-7">Bắt đầu hành trình thiết kế nội thất của bạn với HOMEWOOD</p>
        <Link
          to="/lien-he"
          className="bg-walnut text-white px-10 py-4 rounded-lg font-medium text-sm hover:bg-walnut-dark transition-colors inline-flex items-center gap-2"
        >
          Liên Hệ Ngay <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
