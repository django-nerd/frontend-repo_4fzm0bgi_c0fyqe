import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 h-[70vh]">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white pointer-events-none" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-[70vh]">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-white/50 shadow-sm backdrop-blur text-slate-700 text-xs">
                <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                Modern, minimalist, fintech-ready
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                A clean, modern e‑commerce experience
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                Discover pastel-perfect products and seamless checkout vibes.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#products" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-colors">Shop now</a>
                <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition-colors">Learn more</a>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
