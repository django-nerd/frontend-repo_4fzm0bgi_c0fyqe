import { useState } from 'react'
import { ShoppingCart, Menu, X, Search } from 'lucide-react'

export default function Navbar({ cartCount, onToggleCart }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-md bg-white/60 dark:bg-slate-900/60 border border-white/20 dark:border-slate-800/60 rounded-2xl mt-4">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-lg" />
              <span className="font-semibold text-slate-900 dark:text-white text-lg">BlueCommerce</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-slate-700 dark:text-slate-200">
              <a href="#products" className="hover:text-sky-500 transition-colors">Products</a>
              <a href="#features" className="hover:text-sky-500 transition-colors">Features</a>
              <a href="#about" className="hover:text-sky-500 transition-colors">About</a>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
                <Search size={18} className="text-slate-500" />
                <input placeholder="Search" className="bg-transparent outline-none text-sm w-36 placeholder:text-slate-400" />
              </div>
              <button onClick={onToggleCart} className="relative inline-flex items-center justify-center rounded-xl h-10 w-10 bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 text-[11px] px-1.5 py-0.5 rounded-md bg-sky-500 text-white shadow">{cartCount}</span>
                )}
              </button>
              <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60" onClick={() => setOpen(!open)}>
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="px-4 pb-4 md:hidden">
              <div className="flex flex-col gap-2 text-slate-700 dark:text-slate-200">
                <a href="#products" className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Products</a>
                <a href="#features" className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Features</a>
                <a href="#about" className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">About</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
