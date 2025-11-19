import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])
  const [openCart, setOpenCart] = useState(false)

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const toggleCart = () => setOpenCart((s) => !s)

  const total = useMemo(() => cart.reduce((sum, i) => sum + i.price * (i.qty || 1), 0), [cart])

  useEffect(() => {
    if (openCart) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => (document.body.style.overflow = '')
  }, [openCart])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar cartCount={cart.length} onToggleCart={toggleCart} />
      <Hero />
      <Products onAdd={addToCart} />

      {/* Cart Drawer */}
      {openCart && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={toggleCart} />
          <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Your cart</h3>
              <button onClick={toggleCart} className="text-slate-500 hover:text-slate-800">Close</button>
            </div>
            <div className="mt-4 space-y-4">
              {cart.length === 0 ? (
                <p className="text-slate-600">Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 border border-slate-200 rounded-xl p-3">
                    <img src={item.image_url} alt={item.title} className="h-16 w-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-slate-600">${item.price.toFixed(2)}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setCart(c => c.map(p => p.id === item.id ? { ...p, qty: Math.max(1, (p.qty||1)-1) } : p))} className="h-8 w-8 rounded-lg bg-slate-100">-</button>
                      <span>{item.qty || 1}</span>
                      <button onClick={() => setCart(c => c.map(p => p.id === item.id ? { ...p, qty: (p.qty||1)+1 } : p))} className="h-8 w-8 rounded-lg bg-slate-100">+</button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="mt-6 border-t border-slate-200 pt-4 flex items-center justify-between">
              <span className="text-slate-600">Total</span>
              <span className="text-lg font-semibold">${total.toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">Checkout</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default App
