import { Star } from 'lucide-react'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-900/5 transition-all overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={product.image_url} alt={product.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-slate-900 line-clamp-1">{product.title}</h3>
            <p className="text-sm text-slate-500 line-clamp-2">{product.description}</p>
            <div className="mt-2 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={i < Math.round(product.rating || 0) ? 'fill-current' : 'opacity-30'} />
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-slate-900">${product.price.toFixed(2)}</div>
            <button onClick={() => onAdd(product)} className="mt-2 inline-flex items-center justify-center px-3 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
