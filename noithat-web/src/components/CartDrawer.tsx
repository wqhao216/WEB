import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function fmt(n: number) {
  return n.toLocaleString('vi-VN') + '₫'
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, count } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsOpen(false)}
      />
      <aside className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-walnut" />
            <span className="font-medium text-gray-900">Giỏ hàng ({count})</span>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5 text-gray-500 hover:text-gray-800" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag className="w-12 h-12 text-gray-200 mb-4" />
              <p className="text-gray-500 text-sm">Giỏ hàng của bạn đang trống</p>
              <Link
                to="/san-pham"
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-walnut underline underline-offset-4"
              >
                Khám phá sản phẩm
              </Link>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                  {item.variant && <p className="text-xs text-secondary mt-0.5">{item.variant}</p>}
                  <p className="text-sm font-semibold text-walnut mt-1">{fmt(item.price)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQty(item.id, item.quantity - 1)}
                      className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center hover:border-walnut"
                    >
                      <Minus className="w-3 h-3 text-gray-600" />
                    </button>
                    <span className="text-sm w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.id, item.quantity + 1)}
                      className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center hover:border-walnut"
                    >
                      <Plus className="w-3 h-3 text-gray-600" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-xs text-gray-400 hover:text-red-500"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gray-100 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-secondary">Tổng tạm tính</span>
              <span className="font-semibold text-gray-900">{fmt(total)}</span>
            </div>
            <p className="text-xs text-secondary">Phí vận chuyển và thuế tính khi thanh toán</p>
            <button className="w-full bg-walnut text-white py-3.5 rounded-lg font-medium hover:bg-walnut-dark transition-colors text-sm">
              Tiến Hành Thanh Toán
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-gray-200 text-gray-700 py-3 rounded-lg text-sm hover:border-walnut hover:text-walnut transition-colors"
            >
              Tiếp Tục Mua Sắm
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
