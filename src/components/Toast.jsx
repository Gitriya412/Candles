import React, { useEffect } from 'react';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

export default function Toast({ toast, onClose, onOpenCart }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 animate-fade-up max-w-sm w-full">
      <div className="bg-espresso text-cream-100 p-4 rounded-2xl shadow-luxury border border-white/15 flex items-start gap-3 backdrop-blur-md">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
          <CheckCircle2 className="w-4 h-4" />
        </div>

        <div className="flex-1 text-xs">
          <p className="font-semibold text-white">{toast.title}</p>
          <p className="text-cream-200/80 mt-0.5">{toast.message}</p>
          {toast.showCartAction && (
            <button
              onClick={() => {
                onClose();
                onOpenCart();
              }}
              className="mt-2 text-[11px] font-semibold text-amberGold hover:underline inline-flex items-center gap-1"
            >
              <span>View in Bag</span>
              <span>→</span>
            </button>
          )}
        </div>

        <button
          onClick={onClose}
          className="text-cream-200/50 hover:text-white p-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
