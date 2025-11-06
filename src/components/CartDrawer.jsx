import { X, Plus, Minus, Trash2, CreditCard } from 'lucide-react';

export default function CartDrawer({ open, onClose, items, totals, onRemove, onChangeQty }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[28rem] bg-white shadow-xl border-l border-neutral-200 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Cart drawer"
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-neutral-200">
          <h3 className="text-lg font-bold">Your cart</h3>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-neutral-50">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-neutral-600">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 border border-neutral-200 rounded-lg p-3">
                <img src={item.image} alt={item.title} className="h-16 w-16 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium line-clamp-2">{item.title}</h4>
                    <button onClick={() => onRemove(item.id)} className="p-1 text-neutral-500 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">${item.price.toFixed(2)}</div>
                  <div className="mt-2 inline-flex items-center gap-2">
                    <button onClick={() => onChangeQty(item.id, -1)} className="p-1 rounded border border-neutral-200 hover:bg-neutral-50">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-[2ch] text-center text-sm font-medium">{item.qty}</span>
                    <button onClick={() => onChangeQty(item.id, 1)} className="p-1 rounded border border-neutral-200 hover:bg-neutral-50">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="h-16 px-4 border-t border-neutral-200 flex items-center justify-between">
          <div className="text-sm">
            <div className="flex items-center justify-between gap-6">
              <span className="text-neutral-600">Subtotal</span>
              <span className="font-medium">${totals.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between gap-6">
              <span className="text-neutral-600">Shipping</span>
              <span className="font-medium">${totals.shipping.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between gap-6">
              <span className="text-neutral-600">Taxes</span>
              <span className="font-medium">${totals.taxes.toFixed(2)}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase text-neutral-500">Total</div>
            <div className="text-lg font-extrabold">${totals.total.toFixed(2)}</div>
          </div>
        </div>

        <div className="px-4 pb-4">
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-500">
            <CreditCard className="h-5 w-5" />
            Proceed to checkout
          </button>
          <p className="mt-2 text-center text-xs text-neutral-500">
            Demo UI — connect payments, shipping, taxes, and order management via backend APIs.
          </p>
        </div>
      </aside>
    </div>
  );
}
